---
title: HTML、CSS、DOM
---

### HTML

#### HTML 语义化标签

> 语义化标签是一种写 HTML 标签的方法论/方式，明确了 HTML 的书写规范
> 实现方法：遇到标题就用 h1 到 h6，遇到段落用 p，遇到文章用 article，主要内容用 main，边栏用 aside，导航用 nav……；

**优点**

- 适合搜索引擎检索
- 适合人类阅读，利于团队维护

#### HTML 5 新标签

- 文章相关：header main footer nav section article figure mark
- 多媒体相关：video audio svg canvas
- 表单相关：type=email type=tel

#### Canvas 和 SVG 的区别

Canvas 主要是用笔刷来绘制 2D 图形
SVG 主要是用标签来绘制不规则矢量图

- 相同点：都是主要用来画 2D 图形的。
- 不同点：Canvas 画的是位图，SVG 画的是矢量图。
- 不同点：SVG 节点过多时渲染慢，Canvas 性能更好一点，但写起来更复杂。
- 不同点：SVG 支持分层和事件，Canvas 不支持，但是可以用库实现。

4. meta viewport

```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
```

- width：控制视口的宽度
- initial-scale： 属性控制页面最初加载时的缩放等级
- maximum-scale：允许用户缩放到的最大比例。
- minimum-scale：允许用户缩放到的最小比例。
- user-scalable：用户是否可以手动缩放

### CSS

####　两种盒模型（box-sizing）区别

border-box：即 width 指定的是 content 区域宽度，而不是实际宽度

> 实际宽度 = width + padding + border

content-box：即 width 指定的是左右边框外侧的距离

> 实际宽度 = width

相同点：都是用来指定宽度的
不同点： border-box 更好用

#### BFC

「块级格式化上下文」

> BFC 触发条件

- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块 inline block 元素
- overflow 值不为 visible 的块元素
- 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）

> 解决问题

1. 清除浮动
2. 防止 margin 合并

#### 居中布局

> 水平居中

- 行内元素: text-align: center
- 块级元素: margin: 0 auto
- absolute + transform
- flex + justify-content: center

> 垂直居中

- line-height: height
- absolute + transform
- flex + align-items: center
- table

> 水平垂直居中

- flex + justify-content + align-items
- translate -50%
- margin-top -50%
- absolute margin auto

#### CSS 选择器优先级

- !important > 行内样式 > #id > .class > tag > \* > 继承 > 默认
- 选择器 从右往左 解析

- 选择器越具体，其优先级越高
- 相同优先级，出现在后面的，覆盖前面的
- 属性后面加 !important 的优先级最高，但是要少用

#### 清除浮动

1. 给父元素加上 .clearfix

```
.clearfix:after{
     content: '';
     display: block; /*或者 table*/
     clear: both;
 }
 .clearfix{
     zoom: 1; /* IE 兼容*/
 }
```

2. 给父元素加上 overflow:hidden

#### 层叠上下文

元素提升为一个比较特殊的图层，在三维空间中 (z 轴) 高出普通元素一等

> 触发条件

- 根层叠上下文(html)
- position
- css3 属性
  - flex
  - transform
  - opacity
  - filter
  - will-change
  - -webkit-overflow-scrolling

#### link 与 @import 区别

- link 功能较多，可以定义 RSS，定义 Rel 等作用，而@import 只能用于加载 css
- 当解析到 link 时，页面会同步加载所引的 css，而@import 所引用的 css 会等到页面加载完才被加载
- @import 需要 IE5 以上才能使用
- link 可以使用 js 动态引入，@import 不行

#### CSS 预处理器(Sass/Less/Postcss)

> 原理
> 将类 CSS 语言通过 Webpack 编译 转成浏览器可读的真正 CSS。在这层编译之上，便可以赋予 CSS 更多更强大的功能

**常用功能**

> 嵌套、变量、循环语句、条件语句、自动前缀、单位转换、mixin 复用

#### CSS 动画

- transition: 过渡动画

  - transition-property: 属性
  - transition-duration: 间隔
  - transition-timing-function: 曲线
  - transition-delay: 延迟
  - 常用钩子: transitionend

- animation / keyframes
- animation-name: 动画名称，对应@keyframes
- animation-duration: 间隔
- animation-timing-function: 曲线
- animation-delay: 延迟
- animation-iteration-count: 次数
  - infinite: 循环动画
- animation-direction: 方向
  - alternate: 反向播放
- animation-fill-mode: 静止模式
  - forwards: 停止时，保留最后一帧
  - backwards: 停止时，回到第一帧
  - both: 同时运用 forwards / backwards
- 常用钩子: animationend

- 动画属性: 尽量使用动画属性进行动画，能拥有较好的性能表现
- translate
- scale
- rotate
- skew
- opacity
- color

### DOM

#### 事件委托

把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。

> 优点

- 只需要将同类元素的事件委托给父级或者更外级的元素，不需要给所有的元素都绑定事件，减少内存占用空间，提升性能。
- 动态新增的元素无需重新绑定事件

1.  简易版

```

 ul.addEventListener('click', function(e){
     if(e.target.tagName.toLowerCase() === 'li'){
         fn() // 执行某个函数
     }
 })
```

bug ：如果用户点击的是 li 里面的 span，就没法触发 fn，这显然不对。
好处：节省监听器、实现动态监听

2. 高级版

> 思路:点击 span 后，递归遍历 span 的祖先元素看其中有没有 ul 里面的 li

```
 function delegate(element, eventType, selector, fn) {
     element.addEventListener(eventType, e => {
       let el = e.target
       while (!el.matches(selector)) {
         if (element === el) {
           el = null
           break
         }
         el = el.parentNode
       }
       el && fn.call(el, e, el)
     })
     return element
   }

```

#### DOM 事件模型

事件流：描述的是从页面中接收事件的顺序

- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

**事件捕获**
当鼠标点击或者触发 dom 事件时（被触发 dom 事件的元素被叫作事件源），浏览器会从根节点到事件源（由外到内）进行事件传播

**事件冒泡**
事件源到根节点（由内到外）进行事件传播

```
element.addEventListener(event, function, useCapture);
// event 需要绑定的事件
// function 触发事件后要执行的函数
// 第三个参数默认值是 false,表示在事件冒泡阶段调用; 如果为 true，在事件捕获阶段调用

preventDefault ：取消事件默认行为,比如链接的跳转
stopPropagation ：取消事件冒泡
```

#### 手写可拖曳 div

> 要点

1. 注意监听范围，不能只监听 div
2. 不要使用 drag 事件，很难用。
3. 使用 transform 会比 top / left 性能更好，因为可以避免 reflow 和 repaint

```
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width">
     <title>JS Bin</title>
   </head>
   <body>
   <div id="target"></div>
   </body>
   </html>

var dragging = false
var position = null

target.addEventListener('mousedown',function(e){
dragging = true
position = [e.clientX, e.clientY]
})

document.addEventListener('mousemove', function(e){
if(dragging === false){return}
const x = e.clientX
const y = e.clientY
const deltaX = x - position[0]
const deltaY = y - position[1]
const left = parseInt(target.style.left || 0)
const top = parseInt(target.style.top || 0)
target.style.left = left + deltaX + 'px'
target.style.top = top + deltaY + 'px'
position = [x, y]
})

document.addEventListener('mouseup', function(e){
dragging = false
})

```
