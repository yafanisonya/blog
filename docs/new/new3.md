---
title: 异步编程
---

### 异步编程

#### 同步模式

```
console.log('global start')

function bar(){
  console.log('bar task')
}

function foo(){
  console.log('foo task')
  bar()
}

foo()

console.log('global end')

// 输出
global begin
foo task
bar task
global end
```

#### 异步模式

![异步模式](https://i.imgur.com/KEeOg6m.png)

```
console.log('global begin')

setTimeout(function timer1(){
  console.log('timer1 invoke')
},1800)

setTimeout(function timer2(){
  console.log('timer2 invoke')

  setTimeout(function inner(){
    console.log('inner invoke')
  },1000)
})

console.log('global end')

// 输出
global begin
global end
timer2 invoke
timer1 invoke
inner invoke
```

#### 回调函数

```
function foo(callback){
  setTimeout(function(){
    callback()
  },3000)
}

foo(function(){
  console.log('回调函数')
  console.log('异步任务结束后执行此函数')
})
```

#### Promise

![Promise](https://i.imgur.com/FRD0dFV.png)

##### 基本示例

```
const promise = new Promise(function (reslove, reject){
  resolve(100)
  reject(new Error('promise rejected'))
})

promise.then(function (value){
  console.log('resolved ===>>> ', value)
}, function (error){
  console.log('rejected ===>>>', error)
})
```

##### 封装 AJAX

```
function ajax(url){
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.responseType = 'json'
    xhr.onload = function (){
      if(this.status === 200){
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

ajax('/api/first.json').then( function (res){
  console.log(res)
}, function (error){
  console.log(error)
})
```

##### 链式调用

```
ajax('/api/users.json')
  .then(function(value){
    console.log('first === >>>')
  })
  .then(function(value){
    console.log('second === >>>')
  })
```

##### 异常处理

```
// 因为 Promise 链条上的任何一个异常都会被一直向后传递，直至捕获
// 分开注册的 onRejected 相当于给整个 Promise 链条注册失败回调

ajax('/api/users.json')
  .then(function onFulfilled(value){
    console.log('onFulfilled === >>>', value)
  })
  .catch(function onRejected(error){
    console.log('onRejected === >>>', error)
  })

 // then(onRejected) 实际上就相当于 then(undefined, onRejected)

  ajax('/api/users.json')
    .then(function onFulfilled(value){
      console.log('onFulfilled === >>>', value)
    })
    .then(undefined, function onRejected(error){
      console.log('onRejected === >>>', error)
    })

 // 同时注册的 onRejected 只是给当前 Promise 对象注册的失败回调， 它只能捕获到当前 Promise 对象的异常

  ajax('/api/users.json')
    .then(function onFulfilled(value){
      console.log('onFulfilled === >>>', value)
    }, function onRejected(error){
      console.log('onRejected === >>>', error)
    })
```

##### All、Race

- Promise.all()中的 Promise 全部执行通过才认为是成功，否则认为是失败；
- Promise.race()中的 Promise 中第一个执行完毕的是通过，则认为成功，如果第一个执行完毕的 Promise 是拒绝，则认为失败；

```
var promise = Promise.all([
  ajax('/api/users.json'),
  ajax('/api/posts.json')
])

// Promise.race 实现超时控制
const request = ajax('/api/posts.json')
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('timeout === >>>')), 500)
})

Promise.race([
  request, timeout
])
.then(value =>{
  console.log(value)
})
.catch(error =>{
  console.log(error)
})
```

##### 执行顺序

```
// 微任务
console.log('global start')

// setTimeout 的回调是 宏任务， 进入回调队列排队
setTimeout(() => {
  console.log('setTimeout')
}, 0)

// Promise 的回调是 微任务， 本轮调用末尾直接执行
Promise.resolve()
  .then(() => {
    console.log('promise')
  }）
  .then(() => {
    console.log('promise 2')
  })
  .then(() => {
    console.log('promise 3')
  })

console.log('global end')

// 输出
// global start, global end, promise, promise 2, promise 3, setTimeout
```

#### Generator

- Generator 函数可以暂停执行， 在函数名前要加星号
- value 是 yield 语句后面表达式的值，表示当前阶段的值；
- done 是布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段

```
// 生成器函数
function * foo(){
  console.log('start === >>>')

  try{
    const res = yield 'foo'
    console.log(res)
  } catch(e){
    console.log(e)
  }
}

// 执行函数不会返回结果，返回的是指针对象
const generator = foo()

// 调用指针的 next 方法，会移动内部指针指向第一个 yield 语句
const result = generator.next()
console.log(result)  //  { value: 'foo', done: false }

// next方法带有参数，参数传入 Generator 函数，作为上个阶段异步任务的返回结果
generator.next('bar') // bar

// 使用指针对象的 throw 方法抛出错误， 可以被 try...catch 代码块捕获
generator.throw(new Error('Generator error'))
```

#### Async、Await

- async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数
- 当函数执行时，一旦遇到 await 就会先返回
- 等到触发的异步操作完成，再执行函数体内后面的语句
- await 命令只能用在 async 函数之中，如果用在普通函数，就会报错

```
async function main(){
  try{
    const users = await ajax('/api/users.json')
    console.log(users)

    const posts = await ajax('/api/posts.json')
    console.log(posts)

    const urls = await ajax('/api/urls.json')
    console.log(urls)
  } catch (e) {
    console.log(e)
  }
}

const promise = main()

promise.then(() => {
  console.log('all completed')
})
```
