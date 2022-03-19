---
title: Vue3 Wheel
---

## value、 :value 区别

```
value="true"    // 字符串
:value="true"   // 布尔
```

## :value 和 @事件名 父子通信

- 使用 context.emit(事件名，事件参数) 触发事件
- $event 的值是 emit 的第二个参数

```
// SwitchDemo.vue
import Switch from '../lib/Switch.vue'
<Switch :value='bool' @input="bool = $event" />

export default{
  setup(){
    const bool = ref(false)
    return {bool}
  }
}

// Switch.vue
<button @click="toggle" :class="{select:value}"></button>

export default{
  props:{ value: Boolean}
  setup(props,context){
    const toggle = ()=>{
      context.emit('input', !props.value)
    }
  }
}
```

## v-model

```
<Switch v-model:value="bool"/>

<!-- 是以下的简写: -->

<Switch :value='bool' @update:value="bool = $event" />

完整代码
// SwitchDemo.vue
import Switch from '../lib/Switch.vue'
<Switch v-model:value="bool">

export default{
  setup(){
    const bool = ref(false)
    return {bool}
  }
}

// Switch.vue
<button @click="toggle" :class="{select:value}"></button>

export default{
  props:{ value: Boolean}
  setup(props,context){
    const toggle = ()=>{
      context.emit('update:value', !props.value)
    }
  }
}
```

## vue3 属性绑定

- 默认所有属性都绑定到根元素
- 使用 inheritAttrs:false 可以取消默认绑定
- 使用 $attrs 或者 context.attrs 获取所有属性
- 使用 v-bind="$attrs" 批量绑定属性
- 使用 const {size,...rest} = context.attrs 将属性分开

```
// ButtonDemo.vue

<Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">按钮</Button>

import Button from '../lib/Button.vue'
export default{
  components: {Button},
  setup(){
    const onClick = ()=>{ console.log('hi')}
  }
}

// Button.vue

<!-- 默认所有属性都绑定到根元素 div -->
<div :size="size">
  <button v-bind="$attrs"></button>

  <button v-bind="rest"></button>
</div>

export default{
  <!-- 取消默认属性绑定 -->
  inheritAttrs: false
  setup(props,context){
    const { size, ...rest} = context.attrs
    return { siez, rest}
  }
}

```

## 库 CSS

- 不能用 scoped
  - 因为 data-v-xxx 中的 xxx 每次运行可能不同
  - 必须输出稳定不变的 class 选择器， 方便使用者覆盖
- 每个 CSS 类要加前缀
- CSS 最小影响原则

```
[class^='gulu-']   // 以 gulu- 开头的 class
[class*=' gulu-']  // 包含 gulu- 的class
```

## loading 动画效果

```
<span
  v-if="loading"
  class="gulu-loadingIndicator"
></span>

// css
> .gulu-loadingIndicator {
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 4px;
  border-radius: 8px;
  border-color: $blue $blue $blue transparent;
  border-style: solid;
  border-width: 2px;
  animation: gulu-spin 1s infinite linear;
}

@keyframes gulu-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

## 使用 JS 获取插槽内容

**const defaluts = context.slots.default()**

```
<Tabs v-model:selected="x">
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
</Tabs>


import Tab from './Tab.vue'
export default{
  setup(props, context){
    const defaults = context.slots.default()
    console.log( defaults[0].type)

    defaults.forEach((tag) => {
      // @ts-ignore
      if (tag.type.name !== Tab.name) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
  }
}
```

## TypeScript 泛型

```
<div ref="container">
  <div :ref="el => { if (t===selected) selectedItem = el }"></div>
  <div ref="indicator"></div>
</div>

const container = ref<HTMLDivElement>(null);
const selectedItem = ref<HTMLDivElement>(null);
const indicator = ref<HTMLDivElement>(null);
```

## watchEffect

> 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。

- 获取宽高和位置 const {width,height}=el.getBoundingClientRect()

```
watchEffect(
  () => {
    const { width } = selectedItem.value.getBoundingClientRect();
    indicator.value.style.width = width + "px";

    <!-- ES6 析构赋值重命名语法 div -->
    const { left: left1 } = container.value.getBoundingClientRect();
    const { left: left2 } = selectedItem.value.getBoundingClientRect();
    const left = left2 - left1;
    indicator.value.style.left = left + "px";
  }
);
```
