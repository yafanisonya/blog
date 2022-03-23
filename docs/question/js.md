---
title: JS 补充
---

# JavaScript

## all、apply 执行效率

```
function callTest() { console.log(this); }
function applyTest() { console.log(this); }

const obj = {};

callTest.call(obj, arg1, arg2, arg3);
applyTest.apply(obj, [arg1, arg2, arg3]);
```

> call 和 apply 之间，call 的性能更好

```
applyTest.apply(obj, [arg1, arg2, arg3]);

function apply() {
    this.call(obj, [...arguments]);
}
```

其实在底层运行上，apply 在调用 apply 的时候，还需要对传入的第二个参数进行解构赋值。
所以从运行的效率的角度上来说，call 少了一次解构赋值，运行效率会比 apply 会更高。

> ES6 里面的 call 还能用解构来传参

```
const f = function (a, b, c) {
  console.log(a, b, c)
}
const arr = [1, 2, 3]
f.call(null, ...arr)
```

## bind 两次 this 指向

> bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

bind 方法与 call / apply 最大的不同就是前者返回一个绑定上下文的函数，而后两者是直接执行了函数。

```
let value = 2;
let foo = {
  value: 1
};
function bar(name, age) {
  return {
    value: this.value,
    name: name,
    age: age
  }
};

// 直接执行了函数
bar.call(foo, "Jack", 20);
// {value: 1, name: "Jack", age: 20}

// 返回一个函数
let bind1 = bar.bind(foo, "Jack", 20);
bind1();
// {value: 1, name: "Jack", age: 20}

// 返回一个函数
let bind2 = bar.bind(foo, "Jack");
bind2(20);
// {value: 1, name: "Jack", age: 20}
```

bind 有如下特性：

- 指定 this
- 传入参数
- 返回一个函数
- 柯里化

**模拟实现 bind**

```
Function.prototype.bind = function (context) {
  // 调用 bind 的不是函数，需要抛出异常
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  // this 指向调用者
  var self = this;

  // 实现第2点：第1个参数是指定的this,只截取第1个之后的参数
  var args = Array.prototype.slice.call(arguments, 1);

  // 实现第3点：返回一个函数
  return function () {
    // 实现第4点：arguments是指bind返回的函数传入的参数
    // 即 return function 的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    // 实现第1点
    return self.apply( context, args.concat(bindArgs) );
  }
}
```

在第一次 bind 完 this 就已经确定，返回了一个函数出去，这个函数体内不存在 this 问题,后续无论 bind 多少次，this 都指向第一次 bind 传入的 context，但是后面 bind 再传入的参数会生效。

## 函数柯里化

柯里化是将 f(a,b,c) 可以被以 f(a)(b)(c) 的形式被调用的转化

```
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

increment(2);   // 3

addTen(2);      // 12

add(1)(2);      // 3
```

## 数据类型判断

- instanceof

  > instanceof 是用来判断 A 是否为 B 的实例
  > 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型

```
[] instanceof Array; // true
{} instanceof Object;// true
new Date() instanceof Date;// true

function Person(){};
new Person() instanceof Person;

[] instanceof Object; // true
new Date() instanceof Object;// true
new Person instanceof Object;// true
```

- typeof
  typeof null，返回的是 object
  typeof 函数，返回的是 function
  typeof 对象实例，返回的是 object，这里注意，除了函数，其他的实例应该都返回的 object

- Object.prototype.toString.call

```
Object.prototype.toString.call('') ;                // [object String]
Object.prototype.toString.call(1) ;                 // [object Number]
Object.prototype.toString.call(true) ;              // [object Boolean]
Object.prototype.toString.call(Symbol());           //[object Symbol]
Object.prototype.toString.call(undefined) ;         // [object Undefined]
Object.prototype.toString.call(null) ;              // [object Null]
Object.prototype.toString.call(new Function()) ;    // [object Function]
Object.prototype.toString.call(new Date()) ;        // [object Date]
Object.prototype.toString.call([]) ;                // [object Array]
Object.prototype.toString.call(new RegExp()) ;      // [object RegExp]
Object.prototype.toString.call(new Error()) ;       // [object Error]
Object.prototype.toString.call(document) ;          // [object HTMLDocument]
Object.prototype.toString.call(window) ;            //[object global] window 是全局对象 global 的引用

```
