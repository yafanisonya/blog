(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{415:function(t,a,v){"use strict";v.r(a);var r=v(55),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"服务端渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),v("h4",{attrs:{id:"什么是渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是渲染"}},[t._v("#")]),t._v(" 什么是渲染")]),t._v(" "),v("ul",[v("li",[t._v("对于前端开发而言，渲染就是 请求后端接口数据，然后将数据通过模板绑定语法绑定到页面中，最终呈现给用户")]),t._v(" "),v("li",[t._v("渲染本质其实就是字符串的解析替换")])]),t._v(" "),v("h4",{attrs:{id:"传统的服务端渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传统的服务端渲染"}},[t._v("#")]),t._v(" 传统的服务端渲染")]),t._v(" "),v("ul",[v("li",[t._v("早期 Web 页面渲染都是在服务端完成")]),t._v(" "),v("li",[t._v("服务端运行过程中将所需的数据结合页面模板渲染为 HTML，响应给客户端浏览器")]),t._v(" "),v("li",[t._v("浏览器呈现出来的是直接包含内容的页面")])]),t._v(" "),v("h5",{attrs:{id:"工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.imgur.com/cDmkMxN.png",alt:"工作流程"}})]),t._v(" "),v("h5",{attrs:{id:"不足"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不足"}},[t._v("#")]),t._v(" 不足")]),t._v(" "),v("ul",[v("li",[t._v("应用的前后端部分完全耦合在一起，在前后端协同开发方面会有非常大的阻力；")]),t._v(" "),v("li",[t._v("前端没有足够的发挥空间，无法充分利用现在前端生态下的一些更优秀的方案；")]),t._v(" "),v("li",[t._v("由于内容都是在服务端动态生成的，所以服务端的压力较大；")]),t._v(" "),v("li",[t._v("相比目前流行的 SPA 应用来说，用户体验一般；")])]),t._v(" "),v("h4",{attrs:{id:"客户端渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#客户端渲染"}},[t._v("#")]),t._v(" 客户端渲染")]),t._v(" "),v("ul",[v("li",[t._v("使用 Ajax 在客户端进行渲染")])]),t._v(" "),v("h5",{attrs:{id:"工作流程-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工作流程-2"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.imgur.com/qNDgvU3.png",alt:"工作流程"}})]),t._v(" "),v("h5",{attrs:{id:"不足-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不足-2"}},[t._v("#")]),t._v(" 不足")]),t._v(" "),v("ul",[v("li",[t._v("首屏渲染慢：因为 HTML 中没有内容，必须等到 JavaScript 加载并执行完成才能呈现页面内容。")]),t._v(" "),v("li",[t._v("SEO 问题： HTML 中没有内容，对于搜索引擎爬虫来说，页面中没有任何有用的信息，自然无法提取关键词进行索引。")])]),t._v(" "),v("h4",{attrs:{id:"现代化的服务端渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#现代化的服务端渲染"}},[t._v("#")]),t._v(" 现代化的服务端渲染")]),t._v(" "),v("ul",[v("li",[t._v("基于 react、vue 框架，客户端渲染和 服务器端渲染的结合")]),t._v(" "),v("li",[t._v("在服务器端执行一次，用于实现服务器端渲染（首屏直出）")]),t._v(" "),v("li",[t._v("在客户端再执行一 次，用于接管页面交互")]),t._v(" "),v("li",[t._v("核心解决 SEO 和首屏渲染慢的问题")])]),t._v(" "),v("h5",{attrs:{id:"工作流程-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工作流程-3"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.imgur.com/P77FYlr.png",alt:"工作流程"}})]),t._v(" "),v("h4",{attrs:{id:"优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),v("ul",[v("li",[t._v("优点：首屏渲染速度快、有利于 SEO")]),t._v(" "),v("li",[t._v("缺点：\n"),v("ul",[v("li",[t._v("开发成本高")]),t._v(" "),v("li",[t._v("涉及构建设置和部署的更多要求。与可以部署在任何静态文件服务器上的完全静态单页面应用程序 (SPA) 不同，服务器渲染应用程序，需要处于 Node.js server 运行环境。")]),t._v(" "),v("li",[t._v("更多的服务器端负载。在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用 CPU 资源")])])])]),t._v(" "),v("h5",{attrs:{id:"相关技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相关技术"}},[t._v("#")]),t._v(" 相关技术：")]),t._v(" "),v("ul",[v("li",[t._v("React 中的 Next.js")]),t._v(" "),v("li",[t._v("Vue 中的 Nuxt.js")])])])}),[],!1,null,null,null);a.default=s.exports}}]);