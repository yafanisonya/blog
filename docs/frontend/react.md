---
title: React
---

## 虚拟 DOM 原理

虚拟 DOM 就是虚拟节点（这句汉化很重要）。
React 用 JS 对象来模拟 DOM 节点，然后将其渲染成真实的 DOM 节点。

### 如何实现

#### 第一步: 模拟

用 JSX 语法写出来的 div 其实就是一个虚拟节点：

```
<div id="app">
  <p class="text">hello world!!!</p>
</div>
```

这代码会得到这样一个对象：

```
{
  tag: 'div',
  props: {
    id: 'app'
  },
  chidren: [
    {
      tag: 'p',
      props: {
        className: 'text'
      },
      chidren: [
        'hello world!!!'
      ]
    }
  ]
}
```

能做到这一点是因为 JSX 语法会被转译为 createElement 函数调用（也叫 h 函
数），如下：

```
React.createElement("div", { id: "app"}, React.createElement("p", {
class: "text" }, "hello world!!!") )
```

#### 第二步: 将虚拟节点渲染为真实节点

```
function render(vdom) {
  // 如果是字符串或者数字，创建一个文本节点
  if (typeof vdom === 'string' || typeof vdom === 'number') {
    return document.createTextNode(vdom)
  }
  const { tag, props, children } = vdom
  // 创建真实DOM
  const element = document.createElement(tag)
  // 设置属性
  setProps(element, props)
  // 遍历子节点，并获取创建真实DOM，插入到当前节点
  children
    .map(render)
    .forEach(element.appendChild.bind(element))

  // 虚拟 DOM 中缓存真实 DOM 节点
  vdom.dom = element

  // 返回 DOM 节点
  return element
}
```

注意，如果节点发生变化，并不会直接把新虚拟节点渲染到真实节点，而是先经
过 diff 算法得到一个 patch 再更新到真实节点上。

#### 解决问题

- DOM 操作性能问题。通过虚拟 DOM 和 diff 算法减少不必要的 DOM 操作，保证性能不太差
- DOM 操作不方便问题。以前各种 DOM API 要记，现在只有 setState

#### 优点

- 为 React 带来了跨平台能力，因为虚拟节点除了渲染为真实节点，还可以渲
  染为其他东西。
- 让 DOM 操作的整体性能更好，能（通过 diff）减少不必要的 DOM 操作。

#### 缺点

- 性能要求极高的地方，还是得用真实 DOM 操作（目前没遇到这种需求）
- React 为虚拟 DOM 创造了合成事件，跟原生 DOM 事件不太一样，工作中要额外注意
  - 所有 React 事件都绑定到根元素，自动实现事件委托
  - 如果混用合成事件和原生 DOM 事件，有可能会出 bug
