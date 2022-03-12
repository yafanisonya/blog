---
title: Vue
---

## Vue 2 生命周期

![生命周期](https://i.imgur.com/ATGMxLM.png)
每个 Vue 实例在创建时都会经历从创建、初始化、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，这就是 Vue 的生命周期。

vue 生命周期钩子，在某一阶段时去触发的函数，目的是为了完成一些动作或者事件

- create 阶段：vue 实例被创建

  - beforeCreate: 创建前，此时 data 和 methods 中的数据都还没有初始化
  - created： 创建完成，属性已经绑定， 但还未生成真实 dom

- mount 阶段： vue 实例被挂载到真实 DOM 节点

  - beforeMount：模板编译/挂载之前
  - mounted: 组件已挂载，此时可以操作 Dom

- update 阶段：当 vue 实例里面的 data 数据变化时，触发组件的重新渲染

  - beforeUpdate updated

- destroy 阶段：vue 实例被销毁
  - beforeDestroy destroyed

> 数据请求放在 mounted

## Vue 2 组件间通信方式

1. 父子组件：使用「props / $emit」进行通信

2. 爷孙组件：
   a. 使用两次父子组件间通信来实现
   b. 使用「provide + inject」来通信

3. 任意组件：使用 eventBus = new Vue() 来通信
   a. 主要 API 是 eventBus.$on 和 eventBus.$emit
   b. 缺点是事件多了就很乱，难以维护
4. 任意组件：使用 Vuex 通信（Vue 3 可用 Pinia 代替 Vuex）

## Vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库

主要包括以下几个模块：

- State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
- Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
- Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。
- Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
- Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。

> Mutation 和 Action 为什么要分开？
> 为了让代码更易于维护

## VueRouter

Vue Router 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。

- mode

  - hash
  - history

- router-link：在不重新加载页面的情况下更改 URL
- router-view：将显示与 url 对应的组件

- 跳转

```
this.$router.push()

<router-link to=""></router-link>
```

> $route 和 $router 区别

- router 为 VueRouter 的实例，是一个全局路由对象，包含了路由跳转的方法（push,replace)、钩子函数等。
- route 是路由信息对象，每一个路由都会有一个 route 对象，是一个局部对象，包含 path,params,hash,query,fullPath,matched,name 等路由信息参数。

> Hash 模式和 History 模式区别

- 一个用的 Hash，一个用的 History API
- 一个不需要后端 nginx 配合，一个需要

### 导航守卫

vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航
全局守卫、路由守卫、组件守卫

全局守卫：

- router.beforeEach 全局前置守卫
- router.beforeResolve 全局解析守卫
- router.afterEach 全局后置钩子

路由独享守卫：beforeEnter

组件内的守卫：

- beforeRouteEnter
- beforeRouteUpdate
- beforeRouteLeave

导航守卫实现登录控制

```
router.beforeEach((to, from, next) => {
  if (to.path === '/login')
    return next()
  if (to 是受控页面 && 没有登录)
    return next('/login')

  next()
})
```

## Vue 2 双向绑定

使用 v-model / .sync 实现，
`v-model` 是 v-bind:value 和 von:input 的语法糖

- v-bind:value 实现了 data ⇒ UI 的单向绑定
- v-on:input 实现了 UI ⇒ data 的单向绑定
- 加起来就是双向绑定了

这两个单向绑定是如何实现？

a. 前者通过 Object.defineProperty API 给 data 创建 getter 和 setter，用于监听
data 的改变，data 一变就会安排改变 UI

b. 后者通过 template compiler 给 DOM 添加事件监听，DOM input 的值变了就
会去修改 data。

## Vue 3 Proxy

1. 弥补 Object.defineProperty 的两个不足
   - 动态创建的 data 属性需要用 Vue.set 来赋值，Vue 3 用了 Proxy 就不需要了
   - 基于性能考虑，Vue 2 篡改了数组的 7 个 API，Vue 3 用了 Proxy 就不需要了
2. defineProperty 需要提前递归地遍历 data 做到响应式，而 Proxy 可以在真正用到
   深层数据的时候再做响应式（惰性）

## Vue 3 Composition API

1. Composition API 比 mixins、高阶组件、extends、Renderless Components 等更好，原因有三：

   - 模版中的数据来源不清晰
   - 命名空间冲突
   - 性能

2. 更适合 TypeScript

## Vue 3 对比 Vue 2 改动

1. createApp() 代替了 new Vue()
2. v-model 代替了以前的 v-model 和 .sync
3. 根元素可以有不止一个元素
4. 新增 Teleport 传送门
5. ref 属性支持函数
6. 响应式原理改变: 使用 Proxy 取代 Object.defineProperty
7. 生命周期
   - 使用 setup 代替之前的 beforeCreate 和 created
   - destroyed 被改名为 unmounted
