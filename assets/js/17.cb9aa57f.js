(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{414:function(n,t,e){"use strict";e.r(t);var a=e(55),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"ts、js-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ts、js-区别"}},[n._v("#")]),n._v(" TS、JS 区别")]),n._v(" "),e("ol",[e("li",[n._v("语法层面：TypeScript = JavaScript + Type（TS 是 JS 的超集）")]),n._v(" "),e("li",[n._v("执行环境层面：浏览器、Node.js 可以直接执行 JS，但不能执行 TS（Deno 可以\n执行 TS）")]),n._v(" "),e("li",[n._v("编译层面：TS 有编译阶段，JS 没有编译阶段（只有转译阶段和 lint 阶段）")]),n._v(" "),e("li",[n._v("编写层面：TS 更难写一点，但是类型更安全")]),n._v(" "),e("li",[n._v("文档层面：TS 的代码写出来就是文档，IDE 可以完美提示")])]),n._v(" "),e("h2",{attrs:{id:"any、unknown、never-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#any、unknown、never-区别"}},[n._v("#")]),n._v(" any、unknown、never 区别")]),n._v(" "),e("h3",{attrs:{id:"any-v-s-unknown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#any-v-s-unknown"}},[n._v("#")]),n._v(" any V.S. unknown")]),n._v(" "),e("p",[n._v("二者都是顶级类型（top type），任何类型的值都可以赋值给顶级类型变量：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("let foo: any = 123; // 不报错\nlet bar: unknown = 123; // 不报错\n")])])]),e("p",[n._v("但是 unknown 比 any 的类型检查更严格，any 什么检查都不做，unknown 要求先收窄类型：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const value: unknown = \"Hello World\";\nconst someString: string = value;\n// 报错：Type 'unknown' is not assignable to type 'string'.(2322)\n\nconst value: unknown = \"Hello World\";\nconst someString: string = value as string; // 不报错\n")])])]),e("p",[n._v("如果改成 any，基本在哪都不报错。所以能用 unknown 就优先用 unknown，类型更\n安全一点。")]),n._v(" "),e("h3",{attrs:{id:"never"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[n._v("#")]),n._v(" never")]),n._v(" "),e("p",[n._v("never 是底类型，表示不应该出现的类型")]),n._v(" "),e("h2",{attrs:{id:"type、-interface-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type、-interface-区别"}},[n._v("#")]),n._v(" type、 interface 区别")]),n._v(" "),e("ol",[e("li",[n._v("组合方式：interface 使用 extends 来实现继承，type 使用 & 来实现联合类型。")]),n._v(" "),e("li",[n._v("扩展方式：interface 可以重复声明用来扩展，type 一个类型只能声明一次")]),n._v(" "),e("li",[n._v("范围不同：type 适用于基本类型，interface 一般不行。")]),n._v(" "),e("li",[n._v("命名方式：interface 会创建新的类型名，type 只是创建类型别名，并没有新创建\n类型。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);