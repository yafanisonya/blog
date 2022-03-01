---
title: Vuex 状态管理
---

### Vuex 状态管理

#### 状态管理组成

- state： 驱动应用的数据源
- view： 以声明方式 将 state 映射到视图
- actions： 响应在 view 上的用户输入导致的状态变化

#### 组件通信方式

##### 父子传值： props

```
<child title="value from parent"></child>

Vue.component('child',{
  props: ['title'],
  template: '<p> {{ title }} </p>'
})
```

##### 子传父： $emit

```
// 子组件使用 $emit 发布自定义事件
<button v-on:click="$emit('enlargeText', 0.1)">Large Button</button>

// 父组件
<child v-on:enlargeText="fontsize += $event"></child>
```

##### Event Bus

```
// eventbus.js
export defalut new Vue()

import bus from './eventbus'
// 使用 $on 订阅
bus.$on('自定义事件', ()=>{})

bus.$on('自定义事件', data => {})

// 使用 $emit 发布
bus.$emit('自定义事件')

bus.$emit('自定义事件', 数据)
```

##### 父通过 ref 获取子组件

```
// 父组件内容
<child ref="c"></child>
this.$refs.c.value = 'value from ref'

// 子组件
<input v-model="value">

data(){
  return{
    value:''
  }
}
```

#### Vuex

- 专门为 Vue.js 设计的状态管理库
- 采用集中式的方式存储需要共享的数据
- 从使用角度，就是一个 JS 库
- 作用是进行状态管理，解决复杂组件通信，数据共享
  应用场景：
- 多个视图依赖于同一状态
- 来自不同视图的行为需要变更同一状态

##### 基本结构

```
// 导入 Vuex
import Vuex from 'vuex'
Vue.use(vuex)

// 注册 Vuex
export default new Vuex.Store({
  state:{},
  getters:{},
  mutations:{},
  actions:{},
  modules:{}
})

// 注入 $store 到 Vue 实例
import store from './store'
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```

##### State

Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态
使用 mapState 简化 State 在视图中的使用， mapState 返回计算属性

```
// store
state: {
  count: 0,
  msg: 'Hello Vuex'
}

// vue中使用
// 1. 通过属性
this.$store.state.count

// 2. 通过辅助函数
import { mapState } from 'vuex'
// 方式一：接收数组参数
// mapState 返回名称为 count 和 msg 的计算属性
computed: {
  ...mapState(['count', 'msg'])
}

// 方式二：接收对象参数
// 通过传入对象，可以重命名返回的计算属性
computed: {
  ...mapState({ num: 'count',  message: 'msg '})
}

computed: {
  ...mapState({
    num: state => state.count,
    message: state => state.msg
  })
}
```

##### Getter

Getter 就是 store 中的计算属性， 使用 mapGetter 简化视图中的使用

```
// store
state: {
  msg: 'Hello Vuex'
},
getters: {
  reverseMsg(state) {
    return state.msg.split('').reverse().join('')
  }
}

// vue中使用
// 1. 通过属性访问
this.$store.getters.reverseMsg

// 2. 通过辅助函数
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
    ...mapGetters(['reverseMsg'])
    // 改名
    ...mapGetters({
      reverse: 'reverseMsg'
    })
  }
}
```

##### Mutation

- 更改 Vuex 的 store 中的状态的唯一方法是 提交 mutation
- mutation 必须是同步函数

```
// store
mutations: {
  increate(state, payload){
    state.count += payload
  }
}

// vue 中使用
// 1. 使用 commit
this.$store.commit('increate',2)

// 2. 通过辅助函数
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increate'
    ]),

    ...mapMutations({
      // 将 this.add() 映射为 this.$store.commit('increate',amount)
      add: 'increate'
    })
  }
}
```

##### Action

- Action 提交的是 mutation，而不是直接变更状态
- Action 可以包含任意异步操作
- 通过 store.dispatch 方法触发

```
// store
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increate(state, payload){
      state.count += payload
    }
  },
  actions: {
    // 接受一个与 store 实例具有相同方法和属性的 context 对象
    increateAsync(context, payload){
      setTimeout(()=>{
        context.commit('increate', payload)
      },200)
    }
  }
})

// vue 中使用
// 1. 使用 dispatch
this.$store.dispatch('increateAsync', 5)

// 2. 通过辅助函数
import { mapActions } from 'vuex'
export default{
  // ...
  methods:{
    ...mapActions(['increateAsync']),

    ...mapActions({
      // 将 this.addAsync 映射为 this.$store.dispatch('increateAsync')
      addAsync: 'increateAsync'
    })
  }
}
```

##### Module

- 将 store 分割成模块， 每个模块拥有自己的 state、 mutation、 action、 getter， 甚至嵌套子模块

```
// moduleA
const state = {
  count: 2
}
const mutations = {
  addCount(state, payload){
    state.count += payload
  }
}

export default{
  // 命名空间
  namespaced: true,
  state,
  mutations
}

// store
const store = new Vuex.Store({
  modules: { moduleA }
})

// vue 中使用
import { mapState, mapMutations } from 'vuex'

export default{
  // ...
  computed: {
    ...mapState('moduleA', ['count'])
  },
  methods: {
    ...mapMutations('moduleA', ['addCount'])
  }
}
```

##### 插件

- Vuex 插件就是一个函数， 接收 store 作为唯一参数
- Store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子

```
const myPlugin = store => {
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式 {type, payload}
  })
}

const store = new Vuex.Store({
  // ...
  plugins: [myPlugin]
})
```
