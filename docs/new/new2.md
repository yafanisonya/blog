---
title: 函数式编程
---

### 函数式编程

#### 概念

用来描述数据(函数)之间的映射

- 函数式编程中的函数指的是数学中的函数，即 映射关系
- 相同的输入始终要得到相同的输出(纯函数)

```
function add(n1,n2){
  return n1 + n2
}

let sum = add(2,3)
```

#### 一等公民

- 函数可以存储在变量中

```
// 函数赋值给变量
let fn = function()｛
  console.log('把函数赋值给变量 === >>>')
｝
fn()

const obj = {
  index(posts){ return Views.index(posts)},
  create(attrs){ return Db.create(attrs)}
}
// 优化代码
const obj = {
  index: Views.index,
  create: Db.create
}
```

- 函数可以作为参数

```
// 高阶函数 -- 函数作为参数
function forEach(array, fn){
  for(let i = 0; i < array.length; i++){
    fn(array[i])
  }
}

// let arr = [1,2,3,4,5]
// forEach(arr, function(){
//  console.log('item === >>>',item)
// })


function filter(array, fn){
  let results = []
  for(let i = 0; i < array.length; i++){
    if(fn(array[i])){
      results.push(array[i])
    }
  }
  return results
}

// let arr = [1,2,3,4,5]
// filter(arr, function(item){
//   return item % 2 === 0
// })


const map = (array, fn) => {
  let results = []
  for(let value of array){
    results.push(fn(value))
  }
  return results
}

// let arr = [1,2,3,4,5]
// arr = map(arr, v => v * v)


const every = (array, fn) => {
  let result = true
  for(let value of array){
    result = fn(value)
    if(!result){ break }
  }
  return result
}

// let arr = [1,2,3,4,5]
// let r = every(arr, v => v > 3)


const some = (array, fn) => {
  let result = false
  for(let value of array){
    result = fn(value)
    if(result){ break }
  }
  return result
}

// let arr = [1,2,3,4,5]
// let r = some(arr, v => v % 2 ===0)
```

- 函数作为返回值

```
// 高阶函数 -- 函数作为返回值
function once(fn){
  let done = false
  return function(){
    if(!done){
      done = true
      return fn.apply(this, arguments)
    }
  }
}

let pay = once(function(money){
  console.log('money === >>>',money)
})

// 只会执行一次
pay(1)
pay(2)
```

#### 闭包

概念： 可以在另一个作用域中调用一个函数的内部函数并访问该函数的作用域中的成员

```
function makeFn(){
  let msg = '函数返回值'
  return function(){
    console.log('msg === >>>', msg)
  }
}

const fn = makeFn()
fn()
```

本质： 函数执行时会放到一个执行栈上，当函数执行完毕后会从执行栈上移除，但是堆上的作用域成员因为被外部引用不能释放。因此内部函数依然可以访问外部函数的成员。

```
// 闭包例子
function makePower(power){
  return function(number){
    return Math.pow(number,power)
  }
}

let power2 = makePower(2)
power2(4)
```

#### 纯函数

概念： 相同的输入永远会得到相同的输出

```
// 纯函数
function getSum(n1,n2){
  return n1 + n2
}

getSum(1,2)    // 3
getSum(1,2)    // 3
getSum(1,2)    // 3
```

举例：
数组的 slice 和 splice 分别是： 纯函数和不纯的函数

- slice 返回数组中的指定部分，不会改变原数组
- splice 对数组进行操作返回该数组，会改变原数组

```
let array = [1,2,3,4,5]
// 纯函数
console.log( array.slice(0,3) )  // [1,2,3]
console.log( array.slice(0,3) )  // [1,2,3]
console.log( array.slice(0,3) )  // [1,2,3]

// 不纯的函数
console.log( array.splice(0,3) ) // [1,2,3]
console.log( array.splice(0,3) ) // [4,5]
```

#### lodash

概念： 是一个纯函数的功能库，提供了对数组、数字、对象、字符串、函数等操作的一些方法。

```
// lodash 使用  first / last / toUpper / reverse
npm i lodash

const _ = require('lodash')
const array = ['fanison', 'good', 'luck']

_.first(array)  // fanison
_.last(array)   // luck
_.toUpper(_.first(array)) // FANISON
_.reverse(array) // ['luck','good','fanison']
```

#### 柯里化

- 当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）
- 然后返回一个新的函数接收剩余的参数，返回结果

```
// 柯里化演示
function checkAge(age){
  let min = 18
  return age >= min
}

// 普通的纯函数
function checkAge(min, age){
  return age >= min
}

// 函数的柯里化
function checkAge(min){
  return function(age){
    return age >= min
  }
}

// ES6
let checkAge = min => (age => age >= min)
```
