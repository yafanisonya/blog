---
title: Vue 补充
---

# Vue

## 组件内部强制刷新

- 刷新整个页面 this.$router.go(0)
- 使用 v-if 标记

  > 当 v-if 的值发生变化时，组件都会被重新渲染一遍

- 使用内置的 forceUpdate 方法

  > 调用强制更新方法 this.$forceUpdate()会更新视图和数据，触发 updated 生命周期

  ```
  <template>
    <button @click="reflush()">刷新组件</button>
  </template>

  <script>
  export default {
    methods: {
      reflush () {
        this.$forceUpdate()
      }
    }
  }
  </script>
  ```

- 使用 key-changing 优化组件

  > vue 使用 key 标记组件身份，当 key 改变时就是释放原始组件，重新加载新的组件

  ```
  <template>
    <div>
      <span :key="key"></span>
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        key: 0
      }
    },
    methods: {
      handleUpdateClick () {
        this.key += 1
      }
    }
  }
  </script>
  ```

## Vue 实现过渡动画

Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

- 条件渲染 (使用 v-if)
- 条件展示 (使用 v-show)
- 动态组件
- 组件根节点

```
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>

new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
```

## 自定义指令

- 通过 Vue.directive() 函数注册一个全局的指令
- 通过组件的 directives 属性，对该组件添加一个局部的指令

```
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}

<input v-focus>

```

**钩子函数**

- bind：只调用一次，指令第一次绑定到元素时调用
- inserted：被绑定元素插入父节点时调用
- update：所在组件的 VNode 更新时调用。
- componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用
- unbind：只调用一次，指令与元素解绑时调用

## Vue 中重置 data 的数据为初始状态

- 使用 Object.assign(target, ...sources)

  > 第一个参数是目标对象，第二个参数是源对象，就是将源对象属性复制到目标对象，返回目标对象

- this.$data 获取当前状态下的 data
- this.$options.data() 获取该组件初始状态下的 data

```
// 将初始状态的 data 复制到当前状态的 data
Object.assign(this.$data, this.$options.data())

// 重置 data 中的某一个对象或者属性：
this.form = this.$options.data().form
```

## Vue、 React 区别

**数据流**

- React 推崇函数式编程（纯组件），数据不可变以及单向数据流
- Vue 是响应式的，也就是基于是数据可变的，当属性变化的时候，响应式的更新对应的虚拟 dom

**响应式原理**

- React: setState,当数据改变时，以组件为根目录，默认全部重新渲染
- Vue: Vue 依赖收集，当数据改变时，自动找到引用组件重新渲染

**组件写法差异**

- React: JSX + inline style
- Vue: template 的单文件组件
