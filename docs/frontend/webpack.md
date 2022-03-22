---
title: Webpack
---

## webpack 构建流程

Webpack 的运行流程是⼀个串行的过程，从启动到结束会依次执行以下流程：

1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
2. 开始编译：用上⼀步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编 译；
3. 确定入口：根据配置中的 entry 找出所有的入口文件；
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤 直到所有入口依赖的文件都经过了本步骤的处理；
5. 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的 依赖关系；
6. 输出资源：根据入口和模块之间的依赖关系，组装成⼀个个包含多个模块的 Chunk，再把每个 Chunk 转换成⼀个 单独的文件加⼊到输出列表，这步是可以修改输出内容的最后机会；
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写⼊到文件系统。

在以上过程中，Webpack 会在特定的时间点⼴播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并 且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

## 常见 Loader

- babel-loader: 把 JS / TS 变成 JS， 把 ES6 转换成 ES5
- ts-loader: 把 TS 变成 JS，并提示类型错误
- markdown-loader: 把 markdown 变成 html
- html-loader: 把 html 变成 JS 字符串
- sass-loader: 把 SASS / SCSS 变成 CSS
- css-loader: 把 CSS 变成 JS 字符串
- style-loader: 把 JS 字符串变成 style 标签
- postcss-loader: 把 CSS 变成更优化的 CSS
- vue-loader: 把单文件组件变成 JS 模块
- thread-loader：用于多进程打包

## 常见 Plugin

- html-webpack-plugin：用于创建 HTML 页面并自动引入 JS 和 CSS
- clean-webpack-plugin：用于清理之前打包的残余文件
- mini-css-extract-plugin: 用于将 JS 中的 CSS 抽离成单独的 CSS 文件
- SplitChunksPlugin：用于代码分包
- DllPlugin + DllReferencePlugin 用于避免大依赖被频繁重新打包，大幅降低打包时间

- eslint-webpack-plugin 用于检查代码中的错误
- DefinePlugin 用于在 webpack config 里添加全局变量
- copy-webpack-plugin 用于拷贝静态文件到 dist

## Loader、Plugin 区别

- **loader** 文件加载器
  - 功能： 能够对文件进行编译、优化、混淆(压缩)等，比如 babel-loader / vue-loader
  - 运行时机： 在创建最终产物之前运行
- **plugin** webpack 插件
  - 功能： 能实现更多功能，比如定义全局变量、Code Split、 加速编译等
  - 运行时机： 在整个打包过程(以及前后)都能运行

### 不同的作用

- **Loader**直译为"加载器"。Webpack 将⼀切文件视为模块，但是 webpack 原⽣是只能解析 js 文件，如果想将其他文件 也打包的话，就会用到 loader 。 所以 Loader 的作用是让 webpack 拥有了加载和解析⾮ JavaScript 文件的能⼒。

- **Plugin**直译为"插件"。Plugin 可以扩展 webpack 的功能，让 webpack 具有更多的灵活性。 在 Webpack 运行的⽣命 周期中会⼴播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

### 不同的用法

- **Loader**在 module.rules 中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每⼀项都是⼀ 个 Object ，里面描述了对于什么类型的文件（ test ），使用什么加载( loader )和使用的参数（ options ）

- **Plugin**在 plugins 中单独配置。 类型为数组，每⼀项是⼀个 plugin 的实例，参数都通过构造函数传⼊。

## 解决跨域

在开发时，页面在 localhost:8080，JS 直接访问后端接口（ http://localhost:3000）会报跨域错误。
为了解决这个问题，可以在 webpack.config.js 中添加如下配置：

```
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
};
```

- 在 JS 中请求 /api/users 就会自动被代理到 http://localhost:3000/api/users
- 希望请求中的 Origin 从 8080 修改为 http://localhost:3000，可以添加 changeOrigin: true
- 如果要访问的是 HTTPS API，那么就需要配置 HTTPS 证书，否则会报错
- 在 target 下面添加 secure: false ，就可以不配置证书且忽略 HTTPS 报错

## 提高构建速度

1. 使用 DllPlugin 将不常变化的代码提前打包，并复用，如 vue、react
2. 使用 thread-loader 或 HappyPack 进行多线程打包
3. 处于开发环境时，在 webpack config 中将 cache 设为 true
4. 处于生产环境时，关闭不必要的环节，比如可以关闭 source map

## swc、esbuild

### swc

- 实现语言：Rust

- 功能：编译 JS/TS、打包 JS/TS

- 优势：比 babel 快很多很多很多（20 倍以上）

- 能否集成进 webpack：能

- 使用者：Next.js、Parcel、Deno、Vercel、ByteDance、Tencent、Shopify……

- 做不到：

  - 对 TS 代码进行类型检查（用 tsc 可以）
  - 打包 CSS、SVG

### esbuild

- 实现语言：Go

- 功能：编译 JS/TS、打包 JS/TS

- 优势：比 babel 快很多很多很多很多很多很多（10~100 倍）

- 能否集成进 webpack：能

- 使用者：vite、vuepress、snowpack、umijs、blitz.js 等

做不到：

- 对 TS 代码进行类型检查
- 打包 CSS、SVG

## webpack 与 vite 的区别

- 开发环境区别

  - vite 自己实现 server，不对代码打包，充分利用浏览器对 `<script type=module>` 的支持
  - webpack-dev-server 常使用 babel-loader 基于内存打包，比 vite 慢很多很多很多

- 生产环境区别

  - vite 使用 rollup + esbuild 来打包 JS 代码
  - webpack 使用 babel 来打包 JS 代码，比 esbuild 慢很多很多很多

- 文件处理时机
  - vite 只会在你请求某个文件的时候处理该文件
  - webpack 会提前打包好 main.js，等你请求的时候直接输出打包好的 JS 给你

目前已知 vite 的缺点有：

- 热更新常常失败，原因不清楚
- 有些功能 rollup 不支持，需要自己写 rollup 插件
- 不支持非现代浏览器

## 配置多页应用

> webpack config

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    admin: './src/admin.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      chunks: ['admin']
    })
  ],
};
```

## webpack、grunt、gulp 区别

### Grunt、Gulp

基于任务运行的工具：
它们会自动执行指定的任务，就像流⽔线，把资源放上去然后通过不同插件进行加工，它们包含活跃的社区，丰富的插 件，能方便的打造各种工作流。

### Webpack

基于模块化打包的工具:
自动化处理模块,webpack 把⼀切当成模块，当 webpack 处理应用程序时，它会递归地构建⼀个依赖关系图 (dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成⼀个或多个 bundle。

> 因此这是完全不同的两类工具,而现在主流的方式是用 npm script 代替 Grunt、Gulp,npm script 同样可以打造任务流.

## webpack、rollup、parcel 区别

**webpack**

- 适用于⼤型复杂的前端站点构建:
- webpack 有强⼤的 loader 和插件⽣态,打包后的文件实际上就是⼀个⽴即执行函数，这个⽴即执行函数接收⼀个参数，这个参数是模块对象，键为各个模块的路径，值为模块内容。⽴即执行函数内部则处理模块之间的引用，执行模块等,这种情况更适合文件依赖复杂的应用开发。

**rollup**

- 适用于基础库的打包，如 vue、d3 等
- Rollup 就是将各个模块打包进⼀个文件中，并且通过 Tree-shaking 来删 除⽆用的代码,可以最⼤程度上降低代码体积,但是 rollup 没有 webpack 如此多的的如代码分割、按需加载等⾼级功 能，其更聚焦于库的打包，因此更适合库的开发。

**parcel**

- 适用于简单的实验性项目
- 可以满足低门槛的快速看到效果,但是⽣态差、报错信息不够全⾯都是硬伤，除了⼀些玩具项目或者实验项目不建议使用。

## 优化前端性能

⽤ webpack 优化前端性能是指优化 webpack 的输出结果，让打包的最终结果在浏览器运⾏快速⾼效。

- 压缩代码:删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤ webpack 的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩 JS ⽂件， 利⽤ cssnano （css-loader?minimize）来压缩 css

- 利⽤ CDN 加速: 在构建过程中，将引⽤的静态资源路径修改为 CDN 上对应的路径。可以利⽤ webpack 对 于 output 参数和各 loader 的 publicPath 参数来修改资源路径

- Tree Shaking: 将代码中永远不会⾛到的⽚段删除掉。可以通过在启动 webpack 时追加参数 --optimize-minimize 来实现

- Code Splitting: 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存

- 提取公共第三⽅库: SplitChunksPlugin 插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码

## 提高打包速度

- happypack: 利⽤进程并⾏编译 loader,利⽤缓存来使得 rebuild 更快,遗憾的是作者表示已经不会继续开发此项⽬,类 似的替代者是 thread-loader

- 外部扩展(externals): 将不怎么需要更新的第三⽅库脱离 webpack 打包，不被打⼊ bundle 中，从⽽减少打包时间,⽐如 jQuery ⽤ script 标签引⼊

- dll: 采⽤ webpack 的 DllPlugin 和 DllReferencePlugin 引⼊ dll，让⼀些基本不会改动的代码先打包成静态资源,避免 反复编译浪费时间

- 利⽤缓存: webpack.cache 、babel-loader.cacheDirectory、 HappyPack.cache 都可以利⽤缓存提⾼ rebuild 效率

- 缩⼩⽂件搜索范围: ⽐如 babel-loader 插件,如果你的⽂件仅存在于 src 中,那么可以 include: path.resolve(\_\_dirname, 'src') ,当然绝⼤多数情况下这种操作的提升有限,除⾮不⼩⼼ build 了 node_modules ⽂件
