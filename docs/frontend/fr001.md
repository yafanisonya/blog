---
title: 手写代码
---

## 防抖与节流

### 防抖 (debounce)

将多次高频操作优化为只在最后一次执行
使用场景：用户输入，只需在输入完成后做一次输入校验即可

```
 function debounce(fn, delay){
     let timerId = null
     return function(){
         const context = this
         if(timerId){window.clearTimeout(timerId)}
         timerId = setTimeout(()=>{
             fn.apply(context, arguments)
             timerId = null
         },delay)
     }
 }
 const debounced = debounce(()=>console.log('hi'))
 debounced()
 debounced()
```

### 节流(throttle):

每隔一段时间后执行一次
使用场景: 滚动条事件 或者 resize 事件，通常每隔 100~500 ms 执行一次即可。

```
function throttle(fn, delay){
     let canUse = true
     return function(){
         if(canUse){
             fn.apply(this, arguments)
             canUse = false
             setTimeout(()=>canUse = true, delay)
         }
     }
 }

 const throttled = throttle(()=>console.log('hi'))
 throttled()
 throttled()
```

## 手写 AJAX

ajax 是一种异步通信的方法,从服务端获取数据,达到局部刷新页面的效果。

- 创建 XMLHttpRequest 对象
- 调用 open 方法传入三个参数 请求方式(GET/POST)、url、同步异步(true/false)
- 监听 onreadystatechange 事件，当 readystate 等于 4 时返回 responseText
- 调用 send 方法传递参数

```
const ajax = (method, url, data, success, fail) => {
  var request = new XMLHttpRequest()
  request.open(method, url);
  request.onreadystatechange = function () {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300 || request.status === 304) {
        success(request)
      }else{
        fail(request)
      }
    }
  };
  request.send();
}
```

## 深拷贝、浅拷贝

### 浅拷贝

以赋值的形式拷贝引用对象，仍指向同一个地址，修改时原对象也会受到影响

- Object.assign
- 展开运算符(...)

```
function shallowClone(obj){
  let cloneObj = {};
  for(let i in obj){
    cloneObj[i] = obj[i]
  }
  return cloneObj
}
```

### 深拷贝

完全拷贝一个新对象，修改时原对象不再受到任何影响

- JSON.parse(JSON.stringify(obj)): 性能最快
  - 具有循环引用的对象时，报错
  - 当值为函数、undefined、或 symbol 时，无法拷贝
- 递归进行逐一赋值

```
function deepClone(obj){
  if( obj === null ){ return null}
  if( obj instanceof RegExp ){ return new RegExp(obj)}
  if( obj instanceof Date ){ return new Date(obj)}

  if( typeof obj === 'object'){
    var result = Array.isArray(obj) ? [] : {}
    for(var i in obj){
      result[i] = typeof obj[i] === 'object' ? deepClone(obj[i] : obj[i])
    }
  } else{
    var result = obj
  }
  rerturn result
}
```

## 数组去重

- 使用 Set
- 利用 for 嵌套 for，然后 splice 去重
- 利用 indexOf 去重
- 利用 includes
- 利用 sort()
- 利用 filter
- 利用 hasOwnProperty
- 使用 WeakMap

```
[...new Set(arr)]

function unique (arr) {
  return Array.from(new Set(arr))
}

// fun2 :双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。
function unique (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  } return arr;
}

// fun3: 新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。
function unique (arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }
  return array;
}

// fun4：利用includes 检测数组是否有某个值
function unique (arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {  /
      array.push(arr[i]);
    }
  }
  return array
}

// fun5: 利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对。
function unique (arr) {
  arr = arr.sort()
  var arrry = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arrry.push(arr[i]);
    }
  }
  return arrry;
}

// fun6： 利用filter
function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}

// fun7: 利用hasOwnProperty
function unique (arr) {
  var obj = {};
  return arr.filter(function (item, index, arr) {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}

// fun8: 使用 WeakMap
 function unique(arr) {
  var map = new Map()
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i]
    if (number === undefined) { continue }
    if (map.has(number)) {
      continue
    }
    map.set(number, true)

  }
  return [...map.keys()]
}
```

## 数组扁平化

- 调用 ES6 中的 flat 方法
- 利用 reduce 函数迭代
- 扩展运算符
- 普通递归

```
let ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]

// flat 方法
ary = ary.flat(Infinity);

// reduce()
function flatten (arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

//扩展运算符: 只要有一个元素有数组，那么循环继续
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
}

// 普通递归
let result = [];
function flatten (ary) {
  for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (Array.isArray(ary[i])) {
      fn(item);
    } else {
      result.push(item);
    }
  }
}
```

## Promise

```
function myPromise(constructor){
  let self=this;
  self.status="pending" //定义状态改变前的初始状态
  self.value=undefined;//定义状态为resolved的时候的状态
  self.reason=undefined;//定义状态为rejected的时候的状态

  function resolve(value){
    //两个==="pending"，保证了了状态的改变是不不可逆的
    if(self.status==="pending"){
      self.value=value;
      self.status="resolved";
    }
  }
  function reject(reason){
     //两个==="pending"，保证了了状态的改变是不不可逆的
     if(self.status==="pending"){
        self.reason=reason;
        self.status="rejected";
      }
  }
  //捕获构造异常
  try{
      constructor(resolve,reject);
  }catch(e){
    reject(e);
    } }

myPromise.prototype.then=function(onFullfilled,onRejected){
  let self=this;
  switch(self.status){
    case "resolved": onFullfilled(self.value); break;
    case "rejected": onRejected(self.reason); break;
    default:
  }
}
// 测试
var p=new myPromise(function(resolve,reject){resolve(1)});
p.then(function(x){console.log(x)})
```

## 发布订阅

**实现思路**

- 创建一个 eventHub
- 创建一个事件中心（Map）
- on 方法用来把函数 fn 都加到事件中心中（订阅者注册事件到调度中心）
- emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应事件中心中的函数（发布者发布事件到调度中心，调度中心处理代码）
- off 方法可以根据 event 值取消订阅（取消订阅）

```
const eventHub = {
  map: {
    // click: [f1 , f2]
  },
  on: (name, fn)=>{
    eventHub.map[name] = eventHub.map[name] || []
    eventHub.map[name].push(fn)
  },
  emit: (name, data)=>{
    const q = eventHub.map[name]
    if(!q) return
    q.map(f => f.call(null, data))
    return undefined
  },
  off: (name, fn)=>{
    const q = eventHub.map[name]
    if(!q){ return }
    const index = q.indexOf(fn)
    if(index < 0) { return }
    q.splice(index, 1)
  }
}

eventHub.on('click', console.log)
eventHub.on('click', console.error)

setTimeout(()=>{
  eventHub.emit('click', 'frank')
},3000)
```

### 使用 class

```
class EventHub {
  map = {}
  on(name, fn) {
    this.map[name] = this.map[name] || []
    this.map[name].push(fn)
  }
  emit(name, data) {
    const fnList = this.map[name] || []
    fnList.forEach(fn => fn.call(undefined, data))
  }
  off(name, fn) {
    const fnList = this.map[name] || []
    const index = fnList.indexOf(fn)
    if(index < 0) return
    fnList.splice(index, 1)
  }
}
// 使用
const e = new EventHub()
e.on('click', (name)=>{
  console.log('hi '+ name)
})
e.on('click', (name)=>{
  console.log('hello '+ name)
})
setTimeout(()=>{
  e.emit('click', 'frank')
},3000)
```
