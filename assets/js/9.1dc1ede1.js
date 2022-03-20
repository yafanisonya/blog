(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{408:function(n,e,t){"use strict";t.r(e);var r=t(55),a=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"防抖与节流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防抖与节流"}},[n._v("#")]),n._v(" 防抖与节流")]),n._v(" "),t("h3",{attrs:{id:"防抖-debounce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防抖-debounce"}},[n._v("#")]),n._v(" 防抖 (debounce)")]),n._v(" "),t("p",[n._v("将多次高频操作优化为只在最后一次执行\n使用场景：用户输入，只需在输入完成后做一次输入校验即可")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(" function debounce(fn, delay){\n     let timerId = null\n     return function(){\n         const context = this\n         if(timerId){window.clearTimeout(timerId)}\n         timerId = setTimeout(()=>{\n             fn.apply(context, arguments)\n             timerId = null\n         },delay)\n     }\n }\n const debounced = debounce(()=>console.log('hi'))\n debounced()\n debounced()\n")])])]),t("h3",{attrs:{id:"节流-throttle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节流-throttle"}},[n._v("#")]),n._v(" 节流(throttle):")]),n._v(" "),t("p",[n._v("每隔一段时间后执行一次\n使用场景: 滚动条事件 或者 resize 事件，通常每隔 100~500 ms 执行一次即可。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function throttle(fn, delay){\n     let canUse = true\n     return function(){\n         if(canUse){\n             fn.apply(this, arguments)\n             canUse = false\n             setTimeout(()=>canUse = true, delay)\n         }\n     }\n }\n\n const throttled = throttle(()=>console.log('hi'))\n throttled()\n throttled()\n")])])]),t("h2",{attrs:{id:"手写-ajax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手写-ajax"}},[n._v("#")]),n._v(" 手写 AJAX")]),n._v(" "),t("p",[n._v("ajax 是一种异步通信的方法,从服务端获取数据,达到局部刷新页面的效果。")]),n._v(" "),t("ul",[t("li",[n._v("创建 XMLHttpRequest 对象")]),n._v(" "),t("li",[n._v("调用 open 方法传入三个参数 请求方式(GET/POST)、url、同步异步(true/false)")]),n._v(" "),t("li",[n._v("监听 onreadystatechange 事件，当 readystate 等于 4 时返回 responseText")]),n._v(" "),t("li",[n._v("调用 send 方法传递参数")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const ajax = (method, url, data, success, fail) => {\n  var request = new XMLHttpRequest()\n  request.open(method, url);\n  request.onreadystatechange = function () {\n    if(request.readyState === 4) {\n      if(request.status >= 200 && request.status < 300 || request.status === 304) {\n        success(request)\n      }else{\n        fail(request)\n      }\n    }\n  };\n  request.send();\n}\n")])])]),t("h2",{attrs:{id:"深拷贝、浅拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝、浅拷贝"}},[n._v("#")]),n._v(" 深拷贝、浅拷贝")]),n._v(" "),t("h3",{attrs:{id:"浅拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝"}},[n._v("#")]),n._v(" 浅拷贝")]),n._v(" "),t("p",[n._v("以赋值的形式拷贝引用对象，仍指向同一个地址，修改时原对象也会受到影响")]),n._v(" "),t("ul",[t("li",[n._v("Object.assign")]),n._v(" "),t("li",[n._v("展开运算符(...)")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function shallowClone(obj){\n  let cloneObj = {};\n  for(let i in obj){\n    cloneObj[i] = obj[i]\n  }\n  return cloneObj\n}\n")])])]),t("h3",{attrs:{id:"深拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝"}},[n._v("#")]),n._v(" 深拷贝")]),n._v(" "),t("p",[n._v("完全拷贝一个新对象，修改时原对象不再受到任何影响")]),n._v(" "),t("ul",[t("li",[n._v("JSON.parse(JSON.stringify(obj)): 性能最快\n"),t("ul",[t("li",[n._v("具有循环引用的对象时，报错")]),n._v(" "),t("li",[n._v("当值为函数、undefined、或 symbol 时，无法拷贝")])])]),n._v(" "),t("li",[n._v("递归进行逐一赋值")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function deepClone(obj){\n  if( obj === null ){ return null}\n  if( obj instanceof RegExp ){ return new RegExp(obj)}\n  if( obj instanceof Date ){ return new Date(obj)}\n\n  if( typeof obj === 'object'){\n    var result = Array.isArray(obj) ? [] : {}\n    for(var i in obj){\n      result[i] = typeof obj[i] === 'object' ? deepClone(obj[i] : obj[i])\n    }\n  } else{\n    var result = obj\n  }\n  rerturn result\n}\n")])])]),t("h2",{attrs:{id:"数组去重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组去重"}},[n._v("#")]),n._v(" 数组去重")]),n._v(" "),t("ul",[t("li",[n._v("使用 Set")]),n._v(" "),t("li",[n._v("利用 for 嵌套 for，然后 splice 去重")]),n._v(" "),t("li",[n._v("利用 indexOf 去重")]),n._v(" "),t("li",[n._v("利用 includes")]),n._v(" "),t("li",[n._v("利用 sort()")]),n._v(" "),t("li",[n._v("利用 filter")]),n._v(" "),t("li",[n._v("利用 hasOwnProperty")]),n._v(" "),t("li",[n._v("使用 WeakMap")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("[...new Set(arr)]\n\nfunction unique (arr) {\n  return Array.from(new Set(arr))\n}\n\n// fun2 :双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。\nfunction unique (arr) {\n  for (var i = 0; i < arr.length; i++) {\n    for (var j = i + 1; j < arr.length; j++) {\n      if (arr[i] == arr[j]) {\n        arr.splice(j, 1);\n        j--;\n      }\n    }\n  } return arr;\n}\n\n// fun3: 新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。\nfunction unique (arr) {\n  var array = [];\n  for (var i = 0; i < arr.length; i++) {\n    if (array.indexOf(arr[i]) === -1) {\n      array.push(arr[i])\n    }\n  }\n  return array;\n}\n\n// fun4：利用includes 检测数组是否有某个值\nfunction unique (arr) {\n  var array = [];\n  for (var i = 0; i < arr.length; i++) {\n    if (!array.includes(arr[i])) {  /\n      array.push(arr[i]);\n    }\n  }\n  return array\n}\n\n// fun5: 利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对。\nfunction unique (arr) {\n  arr = arr.sort()\n  var arrry = [arr[0]];\n  for (var i = 1; i < arr.length; i++) {\n    if (arr[i] !== arr[i - 1]) {\n      arrry.push(arr[i]);\n    }\n  }\n  return arrry;\n}\n\n// fun6： 利用filter\nfunction unique(arr) {\n  return arr.filter(function(item, index, arr) {\n    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素\n    return arr.indexOf(item, 0) === index;\n  });\n}\n\n// fun7: 利用hasOwnProperty\nfunction unique (arr) {\n  var obj = {};\n  return arr.filter(function (item, index, arr) {\n    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)\n  })\n}\n\n// fun8: 使用 WeakMap\n function unique(arr) {\n  var map = new Map()\n  for (let i = 0; i < arr.length; i++) {\n    let number = arr[i]\n    if (number === undefined) { continue }\n    if (map.has(number)) {\n      continue\n    }\n    map.set(number, true)\n\n  }\n  return [...map.keys()]\n}\n")])])]),t("h2",{attrs:{id:"数组扁平化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组扁平化"}},[n._v("#")]),n._v(" 数组扁平化")]),n._v(" "),t("ul",[t("li",[n._v("调用 ES6 中的 flat 方法")]),n._v(" "),t("li",[n._v("利用 reduce 函数迭代")]),n._v(" "),t("li",[n._v("扩展运算符")]),n._v(" "),t("li",[n._v("普通递归")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("let ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]\n\n// flat 方法\nary = ary.flat(Infinity);\n\n// reduce()\nfunction flatten (arr) {\n  return arr.reduce((result, item) => {\n    return result.concat(Array.isArray(item) ? flatten(item) : item);\n  }, []);\n}\n\n//扩展运算符: 只要有一个元素有数组，那么循环继续\nwhile (ary.some(Array.isArray)) {\n  ary = [].concat(...ary);\n}\n\n// 普通递归\nlet result = [];\nfunction flatten (ary) {\n  for (let i = 0; i < ary.length; i++) {\n    let item = ary[i];\n    if (Array.isArray(ary[i])) {\n      fn(item);\n    } else {\n      result.push(item);\n    }\n  }\n}\n")])])]),t("h2",{attrs:{id:"promise"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[n._v("#")]),n._v(" Promise")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('function myPromise(constructor){\n  let self=this;\n  self.status="pending" //定义状态改变前的初始状态\n  self.value=undefined;//定义状态为resolved的时候的状态\n  self.reason=undefined;//定义状态为rejected的时候的状态\n\n  function resolve(value){\n    //两个==="pending"，保证了了状态的改变是不不可逆的\n    if(self.status==="pending"){\n      self.value=value;\n      self.status="resolved";\n    }\n  }\n  function reject(reason){\n     //两个==="pending"，保证了了状态的改变是不不可逆的\n     if(self.status==="pending"){\n        self.reason=reason;\n        self.status="rejected";\n      }\n  }\n  //捕获构造异常\n  try{\n      constructor(resolve,reject);\n  }catch(e){\n    reject(e);\n    } }\n\nmyPromise.prototype.then=function(onFullfilled,onRejected){\n  let self=this;\n  switch(self.status){\n    case "resolved": onFullfilled(self.value); break;\n    case "rejected": onRejected(self.reason); break;\n    default:\n  }\n}\n// 测试\nvar p=new myPromise(function(resolve,reject){resolve(1)});\np.then(function(x){console.log(x)})\n')])])]),t("h2",{attrs:{id:"promise-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#promise-all"}},[n._v("#")]),n._v(" Promise.all")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Promise.prototype.myAll = function(promiseList) {\n  return new Promise((resolve, reject) = >{\n    const resultList = []\n    let count = 0\n    promiseList.map((promise, index) = >{\n      promise.resolve(result = >{\n        resultList[index] = result count += 1\n        if (count >= promiseList.length) {\n          resolve(resultList)\n        }\n      },\n      (reason) = >{\n        reject(reason)\n      })\n    })\n  })\n}\n")])])]),t("h2",{attrs:{id:"发布订阅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅"}},[n._v("#")]),n._v(" 发布订阅")]),n._v(" "),t("p",[t("strong",[n._v("实现思路")])]),n._v(" "),t("ul",[t("li",[n._v("创建一个 eventHub")]),n._v(" "),t("li",[n._v("创建一个事件中心（Map）")]),n._v(" "),t("li",[n._v("on 方法用来把函数 fn 都加到事件中心中（订阅者注册事件到调度中心）")]),n._v(" "),t("li",[n._v("emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应事件中心中的函数（发布者发布事件到调度中心，调度中心处理代码）")]),n._v(" "),t("li",[n._v("off 方法可以根据 event 值取消订阅（取消订阅）")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const eventHub = {\n  map: {\n    // click: [f1 , f2]\n  },\n  on: (name, fn)=>{\n    eventHub.map[name] = eventHub.map[name] || []\n    eventHub.map[name].push(fn)\n  },\n  emit: (name, data)=>{\n    const q = eventHub.map[name]\n    if(!q) return\n    q.map(f => f.call(null, data))\n    return undefined\n  },\n  off: (name, fn)=>{\n    const q = eventHub.map[name]\n    if(!q){ return }\n    const index = q.indexOf(fn)\n    if(index < 0) { return }\n    q.splice(index, 1)\n  }\n}\n\neventHub.on('click', console.log)\neventHub.on('click', console.error)\n\nsetTimeout(()=>{\n  eventHub.emit('click', 'frank')\n},3000)\n")])])]),t("h3",{attrs:{id:"使用-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-class"}},[n._v("#")]),n._v(" 使用 class")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class EventHub {\n  map = {}\n  on(name, fn) {\n    this.map[name] = this.map[name] || []\n    this.map[name].push(fn)\n  }\n  emit(name, data) {\n    const fnList = this.map[name] || []\n    fnList.forEach(fn => fn.call(undefined, data))\n  }\n  off(name, fn) {\n    const fnList = this.map[name] || []\n    const index = fnList.indexOf(fn)\n    if(index < 0) return\n    fnList.splice(index, 1)\n  }\n}\n// 使用\nconst e = new EventHub()\ne.on('click', (name)=>{\n  console.log('hi '+ name)\n})\ne.on('click', (name)=>{\n  console.log('hello '+ name)\n})\nsetTimeout(()=>{\n  e.emit('click', 'frank')\n},3000)\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);