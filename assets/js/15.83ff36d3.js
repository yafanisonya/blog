(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{417:function(t,e,a){"use strict";a.r(e);var n=a(55),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"虚拟-dom-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-原理"}},[t._v("#")]),t._v(" 虚拟 DOM 原理")]),t._v(" "),a("p",[t._v("虚拟 DOM 就是虚拟节点（这句汉化很重要）。\nReact 用 JS 对象来模拟 DOM 节点，然后将其渲染成真实的 DOM 节点。")]),t._v(" "),a("h3",{attrs:{id:"如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现"}},[t._v("#")]),t._v(" 如何实现")]),t._v(" "),a("h4",{attrs:{id:"第一步-模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步-模拟"}},[t._v("#")]),t._v(" 第一步: 模拟")]),t._v(" "),a("p",[t._v("用 JSX 语法写出来的 div 其实就是一个虚拟节点：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div id="app">\n  <p class="text">hello world!!!</p>\n</div>\n')])])]),a("p",[t._v("这代码会得到这样一个对象：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("{\n  tag: 'div',\n  props: {\n    id: 'app'\n  },\n  chidren: [\n    {\n      tag: 'p',\n      props: {\n        className: 'text'\n      },\n      chidren: [\n        'hello world!!!'\n      ]\n    }\n  ]\n}\n")])])]),a("p",[t._v("能做到这一点是因为 JSX 语法会被转译为 createElement 函数调用（也叫 h 函\n数），如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('React.createElement("div", { id: "app"}, React.createElement("p", {\nclass: "text" }, "hello world!!!") )\n')])])]),a("h4",{attrs:{id:"第二步-将虚拟节点渲染为真实节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步-将虚拟节点渲染为真实节点"}},[t._v("#")]),t._v(" 第二步: 将虚拟节点渲染为真实节点")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function render(vdom) {\n  // 如果是字符串或者数字，创建一个文本节点\n  if (typeof vdom === 'string' || typeof vdom === 'number') {\n    return document.createTextNode(vdom)\n  }\n  const { tag, props, children } = vdom\n  // 创建真实DOM\n  const element = document.createElement(tag)\n  // 设置属性\n  setProps(element, props)\n  // 遍历子节点，并获取创建真实DOM，插入到当前节点\n  children\n    .map(render)\n    .forEach(element.appendChild.bind(element))\n\n  // 虚拟 DOM 中缓存真实 DOM 节点\n  vdom.dom = element\n\n  // 返回 DOM 节点\n  return element\n}\n")])])]),a("p",[t._v("注意，如果节点发生变化，并不会直接把新虚拟节点渲染到真实节点，而是先经\n过 diff 算法得到一个 patch 再更新到真实节点上。")]),t._v(" "),a("h4",{attrs:{id:"解决问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决问题"}},[t._v("#")]),t._v(" 解决问题")]),t._v(" "),a("ul",[a("li",[t._v("DOM 操作性能问题。通过虚拟 DOM 和 diff 算法减少不必要的 DOM 操作，保证性能不太差")]),t._v(" "),a("li",[t._v("DOM 操作不方便问题。以前各种 DOM API 要记，现在只有 setState")])]),t._v(" "),a("h4",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("为 React 带来了跨平台能力，因为虚拟节点除了渲染为真实节点，还可以渲\n染为其他东西。")]),t._v(" "),a("li",[t._v("让 DOM 操作的整体性能更好，能（通过 diff）减少不必要的 DOM 操作。")])]),t._v(" "),a("h4",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[t._v("性能要求极高的地方，还是得用真实 DOM 操作（目前没遇到这种需求）")]),t._v(" "),a("li",[t._v("React 为虚拟 DOM 创造了合成事件，跟原生 DOM 事件不太一样，工作中要额外注意\n"),a("ul",[a("li",[t._v("所有 React 事件都绑定到根元素，自动实现事件委托")]),t._v(" "),a("li",[t._v("如果混用合成事件和原生 DOM 事件，有可能会出 bug")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);