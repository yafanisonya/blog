---
title: 服务端渲染
---

### 服务端渲染

#### 什么是渲染

- 对于前端开发而言，渲染就是 请求后端接口数据，然后将数据通过模板绑定语法绑定到页面中，最终呈现给用户
- 渲染本质其实就是字符串的解析替换

#### 传统的服务端渲染

- 早期 Web 页面渲染都是在服务端完成
- 服务端运行过程中将所需的数据结合页面模板渲染为 HTML，响应给客户端浏览器
- 浏览器呈现出来的是直接包含内容的页面

##### 工作流程

![工作流程](https://i.imgur.com/cDmkMxN.png)

##### 不足

- 应用的前后端部分完全耦合在一起，在前后端协同开发方面会有非常大的阻力；
- 前端没有足够的发挥空间，无法充分利用现在前端生态下的一些更优秀的方案；
- 由于内容都是在服务端动态生成的，所以服务端的压力较大；
- 相比目前流行的 SPA 应用来说，用户体验一般；

#### 客户端渲染

- 使用 Ajax 在客户端进行渲染

##### 工作流程

![工作流程](https://i.imgur.com/qNDgvU3.png)

##### 不足

- 首屏渲染慢：因为 HTML 中没有内容，必须等到 JavaScript 加载并执行完成才能呈现页面内容。
- SEO 问题： HTML 中没有内容，对于搜索引擎爬虫来说，页面中没有任何有用的信息，自然无法提取关键词进行索引。

#### 现代化的服务端渲染

- 基于 react、vue 框架，客户端渲染和 服务器端渲染的结合
- 在服务器端执行一次，用于实现服务器端渲染（首屏直出）
- 在客户端再执行一 次，用于接管页面交互
- 核心解决 SEO 和首屏渲染慢的问题

##### 工作流程

![工作流程](https://i.imgur.com/P77FYlr.png)

#### 优缺点

- 优点：首屏渲染速度快、有利于 SEO
- 缺点：
  - 开发成本高
  - 涉及构建设置和部署的更多要求。与可以部署在任何静态文件服务器上的完全静态单页面应用程序 (SPA) 不同，服务器渲染应用程序，需要处于 Node.js server 运行环境。
  - 更多的服务器端负载。在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用 CPU 资源

##### 相关技术：

- React 中的 Next.js
- Vue 中的 Nuxt.js