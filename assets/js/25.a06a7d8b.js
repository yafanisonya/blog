(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{421:function(t,e,n){"use strict";n.r(e);var a=n(55),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"vuex-状态管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuex-状态管理"}},[t._v("#")]),t._v(" Vuex 状态管理")]),t._v(" "),n("h4",{attrs:{id:"状态管理组成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#状态管理组成"}},[t._v("#")]),t._v(" 状态管理组成")]),t._v(" "),n("ul",[n("li",[t._v("state： 驱动应用的数据源")]),t._v(" "),n("li",[t._v("view： 以声明方式 将 state 映射到视图")]),t._v(" "),n("li",[t._v("actions： 响应在 view 上的用户输入导致的状态变化")])]),t._v(" "),n("h4",{attrs:{id:"组件通信方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件通信方式"}},[t._v("#")]),t._v(" 组件通信方式")]),t._v(" "),n("h5",{attrs:{id:"父子传值-props"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#父子传值-props"}},[t._v("#")]),t._v(" 父子传值： props")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<child title=\"value from parent\"></child>\n\nVue.component('child',{\n  props: ['title'],\n  template: '<p> {{ title }} </p>'\n})\n")])])]),n("h5",{attrs:{id:"子传父-emit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#子传父-emit"}},[t._v("#")]),t._v(" 子传父： $emit")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// 子组件使用 $emit 发布自定义事件\n<button v-on:click="$emit(\'enlargeText\', 0.1)">Large Button</button>\n\n// 父组件\n<child v-on:enlargeText="fontsize += $event"></child>\n')])])]),n("h5",{attrs:{id:"event-bus"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-bus"}},[t._v("#")]),t._v(" Event Bus")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// eventbus.js\nexport defalut new Vue()\n\nimport bus from './eventbus'\n// 使用 $on 订阅\nbus.$on('自定义事件', ()=>{})\n\nbus.$on('自定义事件', data => {})\n\n// 使用 $emit 发布\nbus.$emit('自定义事件')\n\nbus.$emit('自定义事件', 数据)\n")])])]),n("h5",{attrs:{id:"父通过-ref-获取子组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#父通过-ref-获取子组件"}},[t._v("#")]),t._v(" 父通过 ref 获取子组件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 父组件内容\n<child ref=\"c\"></child>\nthis.$refs.c.value = 'value from ref'\n\n// 子组件\n<input v-model=\"value\">\n\ndata(){\n  return{\n    value:''\n  }\n}\n")])])]),n("h4",{attrs:{id:"vuex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" Vuex")]),t._v(" "),n("ul",[n("li",[t._v("专门为 Vue.js 设计的状态管理库")]),t._v(" "),n("li",[t._v("采用集中式的方式存储需要共享的数据")]),t._v(" "),n("li",[t._v("从使用角度，就是一个 JS 库")]),t._v(" "),n("li",[t._v("作用是进行状态管理，解决复杂组件通信，数据共享\n应用场景：")]),t._v(" "),n("li",[t._v("多个视图依赖于同一状态")]),t._v(" "),n("li",[t._v("来自不同视图的行为需要变更同一状态")])]),t._v(" "),n("h5",{attrs:{id:"基本结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本结构"}},[t._v("#")]),t._v(" 基本结构")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 导入 Vuex\nimport Vuex from 'vuex'\nVue.use(vuex)\n\n// 注册 Vuex\nexport default new Vuex.Store({\n  state:{},\n  getters:{},\n  mutations:{},\n  actions:{},\n  modules:{}\n})\n\n// 注入 $store 到 Vue 实例\nimport store from './store'\nnew Vue({\n  store,\n  render: h => h(App)\n}).$mount('#app')\n")])])]),n("h5",{attrs:{id:"state"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),n("p",[t._v("Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态\n使用 mapState 简化 State 在视图中的使用， mapState 返回计算属性")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// store\nstate: {\n  count: 0,\n  msg: 'Hello Vuex'\n}\n\n// vue中使用\n// 1. 通过属性\nthis.$store.state.count\n\n// 2. 通过辅助函数\nimport { mapState } from 'vuex'\n// 方式一：接收数组参数\n// mapState 返回名称为 count 和 msg 的计算属性\ncomputed: {\n  ...mapState(['count', 'msg'])\n}\n\n// 方式二：接收对象参数\n// 通过传入对象，可以重命名返回的计算属性\ncomputed: {\n  ...mapState({ num: 'count',  message: 'msg '})\n}\n\ncomputed: {\n  ...mapState({\n    num: state => state.count,\n    message: state => state.msg\n  })\n}\n")])])]),n("h5",{attrs:{id:"getter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getter"}},[t._v("#")]),t._v(" Getter")]),t._v(" "),n("p",[t._v("Getter 就是 store 中的计算属性， 使用 mapGetter 简化视图中的使用")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// store\nstate: {\n  msg: 'Hello Vuex'\n},\ngetters: {\n  reverseMsg(state) {\n    return state.msg.split('').reverse().join('')\n  }\n}\n\n// vue中使用\n// 1. 通过属性访问\nthis.$store.getters.reverseMsg\n\n// 2. 通过辅助函数\nimport { mapGetters } from 'vuex'\n\nexport default {\n  // ...\n  computed: {\n    ...mapGetters(['reverseMsg'])\n    // 改名\n    ...mapGetters({\n      reverse: 'reverseMsg'\n    })\n  }\n}\n")])])]),n("h5",{attrs:{id:"mutation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mutation"}},[t._v("#")]),t._v(" Mutation")]),t._v(" "),n("ul",[n("li",[t._v("更改 Vuex 的 store 中的状态的唯一方法是 提交 mutation")]),t._v(" "),n("li",[t._v("mutation 必须是同步函数")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// store\nmutations: {\n  increate(state, payload){\n    state.count += payload\n  }\n}\n\n// vue 中使用\n// 1. 使用 commit\nthis.$store.commit('increate',2)\n\n// 2. 通过辅助函数\nimport { mapMutations } from 'vuex'\n\nexport default {\n  // ...\n  methods: {\n    ...mapMutations([\n      'increate'\n    ]),\n\n    ...mapMutations({\n      // 将 this.add() 映射为 this.$store.commit('increate',amount)\n      add: 'increate'\n    })\n  }\n}\n")])])]),n("h5",{attrs:{id:"action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" Action")]),t._v(" "),n("ul",[n("li",[t._v("Action 提交的是 mutation，而不是直接变更状态")]),t._v(" "),n("li",[t._v("Action 可以包含任意异步操作")]),t._v(" "),n("li",[t._v("通过 store.dispatch 方法触发")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// store\nconst store = new Vuex.Store({\n  state: {\n    count: 0\n  },\n  mutations: {\n    increate(state, payload){\n      state.count += payload\n    }\n  },\n  actions: {\n    // 接受一个与 store 实例具有相同方法和属性的 context 对象\n    increateAsync(context, payload){\n      setTimeout(()=>{\n        context.commit('increate', payload)\n      },200)\n    }\n  }\n})\n\n// vue 中使用\n// 1. 使用 dispatch\nthis.$store.dispatch('increateAsync', 5)\n\n// 2. 通过辅助函数\nimport { mapActions } from 'vuex'\nexport default{\n  // ...\n  methods:{\n    ...mapActions(['increateAsync']),\n\n    ...mapActions({\n      // 将 this.addAsync 映射为 this.$store.dispatch('increateAsync')\n      addAsync: 'increateAsync'\n    })\n  }\n}\n")])])]),n("h5",{attrs:{id:"module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" Module")]),t._v(" "),n("ul",[n("li",[t._v("将 store 分割成模块， 每个模块拥有自己的 state、 mutation、 action、 getter， 甚至嵌套子模块")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// moduleA\nconst state = {\n  count: 2\n}\nconst mutations = {\n  addCount(state, payload){\n    state.count += payload\n  }\n}\n\nexport default{\n  // 命名空间\n  namespaced: true,\n  state,\n  mutations\n}\n\n// store\nconst store = new Vuex.Store({\n  modules: { moduleA }\n})\n\n// vue 中使用\nimport { mapState, mapMutations } from 'vuex'\n\nexport default{\n  // ...\n  computed: {\n    ...mapState('moduleA', ['count'])\n  },\n  methods: {\n    ...mapMutations('moduleA', ['addCount'])\n  }\n}\n")])])]),n("h5",{attrs:{id:"插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),n("ul",[n("li",[t._v("Vuex 插件就是一个函数， 接收 store 作为唯一参数")]),t._v(" "),n("li",[t._v("Store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const myPlugin = store => {\n  store.subscribe((mutation, state) => {\n    // 每次 mutation 之后调用\n    // mutation 的格式 {type, payload}\n  })\n}\n\nconst store = new Vuex.Store({\n  // ...\n  plugins: [myPlugin]\n})\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);