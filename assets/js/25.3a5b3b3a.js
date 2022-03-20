(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{421:function(t,e,n){"use strict";n.r(e);var a=n(55),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"value、-value-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#value、-value-区别"}},[t._v("#")]),t._v(" value、 :value 区别")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('value="true"    // 字符串\n:value="true"   // 布尔\n')])])]),n("h2",{attrs:{id:"value-和-事件名-父子通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#value-和-事件名-父子通信"}},[t._v("#")]),t._v(" :value 和 @事件名 父子通信")]),t._v(" "),n("ul",[n("li",[t._v("使用 context.emit(事件名，事件参数) 触发事件")]),t._v(" "),n("li",[t._v("$event 的值是 emit 的第二个参数")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// SwitchDemo.vue\nimport Switch from '../lib/Switch.vue'\n<Switch :value='bool' @input=\"bool = $event\" />\n\nexport default{\n  setup(){\n    const bool = ref(false)\n    return {bool}\n  }\n}\n\n// Switch.vue\n<button @click=\"toggle\" :class=\"{select:value}\"></button>\n\nexport default{\n  props:{ value: Boolean}\n  setup(props,context){\n    const toggle = ()=>{\n      context.emit('input', !props.value)\n    }\n  }\n}\n")])])]),n("h2",{attrs:{id:"v-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-model"}},[t._v("#")]),t._v(" v-model")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<Switch v-model:value="bool"/>\n\n\x3c!-- 是以下的简写: --\x3e\n\n<Switch :value=\'bool\' @update:value="bool = $event" />\n\n完整代码\n// SwitchDemo.vue\nimport Switch from \'../lib/Switch.vue\'\n<Switch v-model:value="bool">\n\nexport default{\n  setup(){\n    const bool = ref(false)\n    return {bool}\n  }\n}\n\n// Switch.vue\n<button @click="toggle" :class="{select:value}"></button>\n\nexport default{\n  props:{ value: Boolean}\n  setup(props,context){\n    const toggle = ()=>{\n      context.emit(\'update:value\', !props.value)\n    }\n  }\n}\n')])])]),n("h2",{attrs:{id:"vue3-属性绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue3-属性绑定"}},[t._v("#")]),t._v(" vue3 属性绑定")]),t._v(" "),n("ul",[n("li",[t._v("默认所有属性都绑定到根元素")]),t._v(" "),n("li",[t._v("使用 inheritAttrs:false 可以取消默认绑定")]),t._v(" "),n("li",[t._v("使用 $attrs 或者 context.attrs 获取所有属性")]),t._v(" "),n("li",[t._v('使用 v-bind="$attrs" 批量绑定属性')]),t._v(" "),n("li",[t._v("使用 const {size,...rest} = context.attrs 将属性分开")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// ButtonDemo.vue\n\n<Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">按钮</Button>\n\nimport Button from \'../lib/Button.vue\'\nexport default{\n  components: {Button},\n  setup(){\n    const onClick = ()=>{ console.log(\'hi\')}\n  }\n}\n\n// Button.vue\n\n\x3c!-- 默认所有属性都绑定到根元素 div --\x3e\n<div :size="size">\n  <button v-bind="$attrs"></button>\n\n  <button v-bind="rest"></button>\n</div>\n\nexport default{\n  \x3c!-- 取消默认属性绑定 --\x3e\n  inheritAttrs: false\n  setup(props,context){\n    const { size, ...rest} = context.attrs\n    return { siez, rest}\n  }\n}\n\n')])])]),n("h2",{attrs:{id:"库-css"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#库-css"}},[t._v("#")]),t._v(" 库 CSS")]),t._v(" "),n("ul",[n("li",[t._v("不能用 scoped\n"),n("ul",[n("li",[t._v("因为 data-v-xxx 中的 xxx 每次运行可能不同")]),t._v(" "),n("li",[t._v("必须输出稳定不变的 class 选择器， 方便使用者覆盖")])])]),t._v(" "),n("li",[t._v("每个 CSS 类要加前缀")]),t._v(" "),n("li",[t._v("CSS 最小影响原则")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[class^='gulu-']   // 以 gulu- 开头的 class\n[class*=' gulu-']  // 包含 gulu- 的class\n")])])]),n("h2",{attrs:{id:"loading-动画效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loading-动画效果"}},[t._v("#")]),t._v(" loading 动画效果")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<span\n  v-if="loading"\n  class="gulu-loadingIndicator"\n></span>\n\n// css\n> .gulu-loadingIndicator {\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  margin-right: 4px;\n  border-radius: 8px;\n  border-color: $blue $blue $blue transparent;\n  border-style: solid;\n  border-width: 2px;\n  animation: gulu-spin 1s infinite linear;\n}\n\n@keyframes gulu-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n')])])]),n("h2",{attrs:{id:"使用-js-获取插槽内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-js-获取插槽内容"}},[t._v("#")]),t._v(" 使用 JS 获取插槽内容")]),t._v(" "),n("p",[n("strong",[t._v("const defaluts = context.slots.default()")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<Tabs v-model:selected="x">\n  <Tab title="导航1">内容1</Tab>\n  <Tab title="导航2">内容2</Tab>\n</Tabs>\n\n\nimport Tab from \'./Tab.vue\'\nexport default{\n  setup(props, context){\n    const defaults = context.slots.default()\n    console.log( defaults[0].type)\n\n    defaults.forEach((tag) => {\n      // @ts-ignore\n      if (tag.type.name !== Tab.name) {\n        throw new Error("Tabs 子标签必须是 Tab");\n      }\n    });\n  }\n}\n')])])]),n("h2",{attrs:{id:"typescript-泛型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript-泛型"}},[t._v("#")]),t._v(" TypeScript 泛型")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div ref="container">\n  <div :ref="el => { if (t===selected) selectedItem = el }"></div>\n  <div ref="indicator"></div>\n</div>\n\nconst container = ref<HTMLDivElement>(null);\nconst selectedItem = ref<HTMLDivElement>(null);\nconst indicator = ref<HTMLDivElement>(null);\n')])])]),n("h2",{attrs:{id:"watcheffect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#watcheffect"}},[t._v("#")]),t._v(" watchEffect")]),t._v(" "),n("blockquote",[n("p",[t._v("立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。")])]),t._v(" "),n("ul",[n("li",[t._v("获取宽高和位置 const {width,height}=el.getBoundingClientRect()")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('watchEffect(\n  () => {\n    const { width } = selectedItem.value.getBoundingClientRect();\n    indicator.value.style.width = width + "px";\n\n    \x3c!-- ES6 析构赋值重命名语法 div --\x3e\n    const { left: left1 } = container.value.getBoundingClientRect();\n    const { left: left2 } = selectedItem.value.getBoundingClientRect();\n    const left = left2 - left1;\n    indicator.value.style.left = left + "px";\n  }\n);\n')])])]),n("h2",{attrs:{id:"响应式页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式页面"}},[t._v("#")]),t._v(" 响应式页面")]),t._v(" "),n("blockquote",[n("p",[t._v("手机样式 + @media(min-width:600px) + @media(min-width:800px) + @media(min-width:1200px)")])]),t._v(" "),n("h2",{attrs:{id:"grid-布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grid-布局"}},[t._v("#")]),t._v(" Grid 布局")]),t._v(" "),n("ul",[n("li",[t._v("grid-template-columns: 定义每一列的列宽")]),t._v(" "),n("li",[t._v("grid-template-rows: 定义每一行的行高")]),t._v(" "),n("li",[t._v("grid-template-areas: 定义区域")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('display: grid;\njustify-content: start;\nalign-content: space-between;\ngrid-template-areas: "icon title" "icon text";\ngrid-template-rows: 1fr auto;\ngrid-template-columns: 80px auto;\n')])])]),n("h2",{attrs:{id:"圆弧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#圆弧"}},[t._v("#")]),t._v(" 圆弧")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("background: linear-gradient(\n  145deg,\n  rgba(227, 255, 253, 1) 0%,\n  rgba(183, 233, 230, 1) 100%\n);\n// 实现圆弧\nclip-path: ellipse(80% 60% at 50% 40%);\n")])])]),n("h2",{attrs:{id:"高亮源代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高亮源代码"}},[t._v("#")]),t._v(" 高亮源代码")]),t._v(" "),n("blockquote",[n("p",[t._v("使用 prismjs 和 v-html")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<pre\n  class="language-html"\n  v-html="html"\n/>\n\nimport "prismjs";\nimport "prismjs/themes/prism.css";\nconst Prism = (window as any).Prism;\n\nsetup() {\n  const html = computed(() => {\n    return Prism.highlight(\n      props.component.__sourceCode,\n      Prism.languages.html,\n      "html"\n    );\n  });\n}\n')])])]),n("h2",{attrs:{id:"引入-github-markdown-样式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入-github-markdown-样式"}},[t._v("#")]),t._v(" 引入 Github Markdown 样式")]),t._v(" "),n("blockquote",[n("p",[t._v("使用 github-markdown-css")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 引入\nimport 'github-markdown-css'\n\n// 添加 class\n<template>\n  <article class=\"mardown-body\"></article>\n</template>\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);