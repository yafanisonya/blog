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
