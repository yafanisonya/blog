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

## Loader

- file-loader：把文件输出到⼀个文件夹中，在代码中通过相对 URL 去引用输出的文件
- url-loader：和 file-loader 类似，但是能在文件很⼩的情况下以 base64 的方式把文件内容注⼊到代码中去
- source-map-loader：加载额外的 Source Map 文件，以方便断点调试
- image-loader：加载并且压缩图⽚文件
- babel-loader：把 ES6 转换成 ES5
- css-loader：加载 CSS，⽀持模块化、压缩、文件导⼊等特性
- style-loader：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS
- eslint-loader：通过 ESLint 检查 JavaScript 代码

## Plugin

- define-plugin：定义环境变量
- html-webpack-plugin：简化 html 文件创建
- uglifyjs-webpack-plugin：通过 UglifyES 压缩 ES6 代码
- webpack-parallel-uglify-plugin: 多核压缩,提⾼压缩速度
- webpack-bundle-analyzer: 可视化 webpack 输出文件的体积
- mini-css-extract-plugin: CSS 提取到单独的文件中,⽀持按需加载

## Loader、Plugin 区别

### 不同的作用

- **Loader**直译为"加载器"。Webpack 将⼀切文件视为模块，但是 webpack 原⽣是只能解析 js 文件，如果想将其他文件 也打包的话，就会用到 loader 。 所以 Loader 的作用是让 webpack 拥有了加载和解析⾮ JavaScript 文件的能⼒。

- **Plugin**直译为"插件"。Plugin 可以扩展 webpack 的功能，让 webpack 具有更多的灵活性。 在 Webpack 运行的⽣命 周期中会⼴播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

### 不同的用法

- **Loader**在 module.rules 中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每⼀项都是⼀ 个 Object ，里面描述了对于什么类型的文件（ test ），使用什么加载( loader )和使用的参数（ options ）

- **Plugin**在 plugins 中单独配置。 类型为数组，每⼀项是⼀个 plugin 的实例，参数都通过构造函数传⼊。

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

## 提⾼构建速度

1. 多⼊⼝情况下，使⽤ CommonsChunkPlugin 来提取公共代码

2. 通过 externals 配置来提取常⽤库

3. 利⽤ DllPlugin 和 DllReferencePlugin 预编译资源模块 通过 DllPlugin 来对那些我们引⽤但是绝对不会修改的 npm 包来进⾏预编译，再通过 DllReferencePlugin 将预编译的模块加载进来。

4. 使⽤ Happypack 实现多线程加速编译

5. 使⽤ webpack-uglify-parallel 来提升 uglifyPlugin 的压缩速度。 原理上 webpack-uglify-parallel 采⽤了多核并⾏ 压缩来提升压缩速度

6. 使⽤ Tree-shaking 和 Scope Hoisting 来剔除多余代码
