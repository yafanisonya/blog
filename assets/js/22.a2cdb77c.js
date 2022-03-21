(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{418:function(n,e,a){"use strict";a.r(e);var r=a(55),t=Object(r.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"函数式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程"}},[n._v("#")]),n._v(" 函数式编程")]),n._v(" "),a("h4",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[n._v("#")]),n._v(" 概念")]),n._v(" "),a("p",[n._v("用来描述数据(函数)之间的映射")]),n._v(" "),a("ul",[a("li",[n._v("函数式编程中的函数指的是数学中的函数，即 映射关系")]),n._v(" "),a("li",[n._v("相同的输入始终要得到相同的输出(纯函数)")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function add(n1,n2){\n  return n1 + n2\n}\n\nlet sum = add(2,3)\n")])])]),a("h4",{attrs:{id:"一等公民"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一等公民"}},[n._v("#")]),n._v(" 一等公民")]),n._v(" "),a("ul",[a("li",[n._v("函数可以存储在变量中")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 函数赋值给变量\nlet fn = function()｛\n  console.log('把函数赋值给变量 === >>>')\n｝\nfn()\n\nconst obj = {\n  index(posts){ return Views.index(posts)},\n  create(attrs){ return Db.create(attrs)}\n}\n// 优化代码\nconst obj = {\n  index: Views.index,\n  create: Db.create\n}\n")])])]),a("ul",[a("li",[n._v("函数可以作为参数")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 高阶函数 -- 函数作为参数\nfunction forEach(array, fn){\n  for(let i = 0; i < array.length; i++){\n    fn(array[i])\n  }\n}\n\n// let arr = [1,2,3,4,5]\n// forEach(arr, function(){\n//  console.log('item === >>>',item)\n// })\n\n\nfunction filter(array, fn){\n  let results = []\n  for(let i = 0; i < array.length; i++){\n    if(fn(array[i])){\n      results.push(array[i])\n    }\n  }\n  return results\n}\n\n// let arr = [1,2,3,4,5]\n// filter(arr, function(item){\n//   return item % 2 === 0\n// })\n\n\nconst map = (array, fn) => {\n  let results = []\n  for(let value of array){\n    results.push(fn(value))\n  }\n  return results\n}\n\n// let arr = [1,2,3,4,5]\n// arr = map(arr, v => v * v)\n\n\nconst every = (array, fn) => {\n  let result = true\n  for(let value of array){\n    result = fn(value)\n    if(!result){ break }\n  }\n  return result\n}\n\n// let arr = [1,2,3,4,5]\n// let r = every(arr, v => v > 3)\n\n\nconst some = (array, fn) => {\n  let result = false\n  for(let value of array){\n    result = fn(value)\n    if(result){ break }\n  }\n  return result\n}\n\n// let arr = [1,2,3,4,5]\n// let r = some(arr, v => v % 2 ===0)\n")])])]),a("ul",[a("li",[n._v("函数作为返回值")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 高阶函数 -- 函数作为返回值\nfunction once(fn){\n  let done = false\n  return function(){\n    if(!done){\n      done = true\n      return fn.apply(this, arguments)\n    }\n  }\n}\n\nlet pay = once(function(money){\n  console.log('money === >>>',money)\n})\n\n// 只会执行一次\npay(1)\npay(2)\n")])])]),a("h4",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[n._v("#")]),n._v(" 闭包")]),n._v(" "),a("p",[n._v("概念： 可以在另一个作用域中调用一个函数的内部函数并访问该函数的作用域中的成员")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function makeFn(){\n  let msg = '函数返回值'\n  return function(){\n    console.log('msg === >>>', msg)\n  }\n}\n\nconst fn = makeFn()\nfn()\n")])])]),a("p",[n._v("本质： 函数执行时会放到一个执行栈上，当函数执行完毕后会从执行栈上移除，但是堆上的作用域成员因为被外部引用不能释放。因此内部函数依然可以访问外部函数的成员。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 闭包例子\nfunction makePower(power){\n  return function(number){\n    return Math.pow(number,power)\n  }\n}\n\nlet power2 = makePower(2)\npower2(4)\n")])])]),a("h4",{attrs:{id:"纯函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纯函数"}},[n._v("#")]),n._v(" 纯函数")]),n._v(" "),a("p",[n._v("概念： 相同的输入永远会得到相同的输出")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 纯函数\nfunction getSum(n1,n2){\n  return n1 + n2\n}\n\ngetSum(1,2)    // 3\ngetSum(1,2)    // 3\ngetSum(1,2)    // 3\n")])])]),a("p",[n._v("举例：\n数组的 slice 和 splice 分别是： 纯函数和不纯的函数")]),n._v(" "),a("ul",[a("li",[n._v("slice 返回数组中的指定部分，不会改变原数组")]),n._v(" "),a("li",[n._v("splice 对数组进行操作返回该数组，会改变原数组")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("let array = [1,2,3,4,5]\n// 纯函数\nconsole.log( array.slice(0,3) )  // [1,2,3]\nconsole.log( array.slice(0,3) )  // [1,2,3]\nconsole.log( array.slice(0,3) )  // [1,2,3]\n\n// 不纯的函数\nconsole.log( array.splice(0,3) ) // [1,2,3]\nconsole.log( array.splice(0,3) ) // [4,5]\n")])])]),a("h4",{attrs:{id:"lodash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lodash"}},[n._v("#")]),n._v(" lodash")]),n._v(" "),a("p",[n._v("概念： 是一个纯函数的功能库，提供了对数组、数字、对象、字符串、函数等操作的一些方法。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// lodash 使用  first / last / toUpper / reverse\nnpm i lodash\n\nconst _ = require('lodash')\nconst array = ['fanison', 'good', 'luck']\n\n_.first(array)  // fanison\n_.last(array)   // luck\n_.toUpper(_.first(array)) // FANISON\n_.reverse(array) // ['luck','good','fanison']\n")])])]),a("h4",{attrs:{id:"柯里化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#柯里化"}},[n._v("#")]),n._v(" 柯里化")]),n._v(" "),a("ul",[a("li",[n._v("当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）")]),n._v(" "),a("li",[n._v("然后返回一个新的函数接收剩余的参数，返回结果")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 柯里化演示\nfunction checkAge(age){\n  let min = 18\n  return age >= min\n}\n\n// 普通的纯函数\nfunction checkAge(min, age){\n  return age >= min\n}\n\n// 函数的柯里化\nfunction checkAge(min){\n  return function(age){\n    return age >= min\n  }\n}\n\n// ES6\nlet checkAge = min => (age => age >= min)\n")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);