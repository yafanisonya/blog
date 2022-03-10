---
title: 网络
---

### 网络

#### HTTP 状态码

- 1xx: 表示目前是协议处理的中间状态，还需要后续操作
- 2xx: 表示成功状态
- 3xx: 重定向状态，资源位置发生变动，需要重新请求
- 4xx: 请求报文有误
- 5xx: 服务器端发生错误

200 请求成功
301 永久重定向
302 临时重定向
400 请求报文存在语法错误
403 服务器禁止访问
404 资源未找到
500 服务器内部错误

#### 常见的请求方法

- GET: 通常用来获取资源
- POST: 提交数据，即上传数据
- HEAD: 获取资源的元信息
- PUT: 修改数据
- DELETE: 删除资源
- CONNECT: 建立连接隧道，用于代理服务器
- OPTIONS: 列出可对资源实行的请求方法，用来跨域请求
- TRACE: 追踪请求-响应的传输路径

#### GET 和 POST 的区别

> 语义

- GET 用于获取资源，POST 用于提交资源。

> 缓存

- GET 请求会被浏览器主动缓存，而 POST 不会，除非手动设置
- GET 请求参数会被完整保留在浏览器历史记录里，而 POST 中的参数不会被保留

> 编码

- GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制

> 参数

- GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息
- GET 请求在 URL 中传送的参数是有长度限制的，而 POST 没有
- GET 是幂等的，而 POST 不是。(幂等表示执行相同的操作，结果也是相同的) - GET 产生一个 TCP 数据包；POST 产生两个 TCP 数据包
- GET 在浏览器回退时是无害的，而 POST 会再次提交请求
- GET 产生的 URL 地址可以被加入收藏栏，而 POST 不可以

#### HTTP 1.0、1.1、2.0 的区别

- 1 和 1.0 相比，1.1 可以一次传输多个文件
- http1.x 解析基于文本，http2.0 采用二进制格式，新增特性 多路复用、header 压缩、服务端推送(静态 html 资源)

> 1.0 协议缺陷

- 无法复用链接，完成即断开，重新慢启动和 TCP 3 次握手
- head of line blocking: 线头阻塞，导致请求之间互相影响

> 1.1 改进

- 长连接(默认 keep-alive)，复用
- host 字段指定对应的虚拟站点
- 新增功能: 断点续传、身份认证、状态管理、cache 缓存

> 2.0

- 多路复用
- 二进制分帧层: 应用层和传输层之间
- 首部压缩
- 服务端推送

#### Http 和 Https 区别

- HTTP 的 URL 以 http:// 开头，而 HTTPS 的 URL 以 https:// 开头
- HTTP 是不安全的，而 HTTPS 是安全的
- HTTP 标准端口是 80 ，而 HTTPS 的标准端口是 443
- HTTP 无法加密，而 HTTPS 对传输的数据进行加密
- HTTP 无需证书，而 HTTPS 需要 CA 机构 wosign 的颁发的 SSL 证书
- 在 OSI 网络模型中，HTTP 工作于应用层，而 HTTPS 的安全传输机制工作在传输层

#### HTTP 缓存

缓存策略: 可分为 强缓存 和 协商缓存

**强缓存**

浏览器判断缓存是否过期，未过期时，直接使用强缓存

- Expires ：设置过期时间（绝对时间），资源在过期后需要再次请求。受限于本地时间，如果修改了本地时间，可能会造成缓存失效。

- Cache-control：max-age=3600 是设置过期时长（相对时间），跟本地时间无关

> Cache-Control 的 max-age 优先级高于 Expires

**协商缓存**
当缓存已经过期时，使用协商缓存

- 唯一标识方案： Etag(response 携带) & If-None-Match(request 携带，上一次返回的 Etag): 服务器判断资源是否被修改

> ETag 存储的是文件的特殊标识，If-None-Match 会将当前 ETag 发送给服务器，询问该资源 ETag 是否变动，有变动的话就将新的资源发送回来。

- 最后一次修改时间：Last-Modified(response) & If-Modified-Since (request，上一次返回的 Last-Modified)
  - 如果一致，则直接返回 304 通知浏览器使用缓存
  - 如不一致，则服务端返回新的资源

> Last-Modified 表示本地文件最后修改日期，If-Modified-Since 会将 Last-Modified 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来。

- Last-Modified 缺点：
  - 周期性修改，但内容未变时，会导致缓存失效
  - 最小粒度只到 s， s 以内的改动无法检测到

> Etag 的优先级高于 Last-Modified

#### TCP 三次握手

![三次握手](https://i.imgur.com/j4QQU4x.png)
建立连接前，客户端和服务端需要通过握手来确认对方

- 客户端发送 syn(同步序列编号) 请求，进入 syn_send 状态，等待确认
- 服务端接收并确认 syn 包后发送 syn+ack 包，进入 syn_recv 状态
- 客户端接收 syn+ack 包后，发送 ack 包，双方进入 established 状态

#### TCP 四次挥手

- 客户端 -- FIN --> 服务端， FIN—WAIT
- 服务端 -- ACK --> 客户端， CLOSE-WAIT
- 服务端 -- ACK,FIN --> 客户端， LAST-ACK
- 客户端 -- ACK --> 服务端，CLOSED

刚开始双方都处于 establised 状态，假如是客户端先发起关闭请求，则：

1. 第一次挥手：客户端发送一个 FIN 报文，报文中会指定一个序列号。此时客户端处于 FIN_WAIT1 状态。
2. 第二次挥手：服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 + 1 作为 ACK 报文的序列号值，表明已经收到客户端的报文了，此时服务端处于 CLOSE_WAIT 状态。
3. 第三次挥手：如果服务端也想断开连接了，和客户端的第一次挥手一样，发给 FIN 报文，且指定一个序列号。此时服务端处于 LAST_ACK 的状态。
4. 第四次挥手：客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答，且把服务端的序列号值 + 1 作为自己 ACK 报文的序列号值，此时客户端处于 TIME_WAIT 状态。需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态
5. 服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态。

#### TCP、 UDP 区别

![区别](https://i.imgur.com/FrK3YvC.png)

1. `TCP`向上层提供面向连接的可靠服务 ，`UDP`向上层提供无连接不可靠服务。
2. 虽然 `UDP` 并没有 `TCP` 传输来的准确，但是也能在很多实时性要求高的地方有所作为
3. 对数据准确性要求高，速度可以相对较慢的，可以选用`TCP`

#### 浏览器本地存储各自优劣

浏览器的本地存储主要分为 Cookie、WebStorage 和 IndexDB, 其中 WebStorage 又可以分为 localStorage 和 sessionStorage。

> 共同点: 都是保存在浏览器端、且同源的

> 不同点

1. cookie 数据始终在同源的 http 请求中携带（即使不需要），即 cookie 在浏览器和服务器间来回传递。cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下 sessionStorage 和 localStorage 不会自动把数据发送给服务器，仅在本地保存。

2. 存储大小限制也不同，

- cookie 数据不能超过 4K，sessionStorage 和 localStorage 可以达到 5M
- sessionStorage：仅在当前浏览器窗口关闭之前有效；
- localStorage：始终有效，窗口或浏览器关闭也一直保存，本地存储，因此用作持久数据；
- cookie：只在设置的 cookie 过期时间之前有效，即使窗口关闭或浏览器关闭

3. 作用域不同

- sessionStorage：不在不同的浏览器窗口中共享，即使是同一个页面；
- localstorage：在所有同源窗口中都是共享的；也就是说只要浏览器不关闭，数据仍然存在
- cookie: 也是在所有同源窗口中都是共享的.也就是说只要浏览器不关闭，数据仍然存在

#### 跨域通信方式

- jsonp(利用 script 标签没有跨域限制的漏洞实现。缺点：只支持 GET 请求)

```
function jsonp(url, jsonpCallback, success) {
  const script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[jsonpCallback] = function(data) {
    success && success(data)
  }
  document.body.appendChild(script)
}
```

- CORS(设置 Access-Control-Allow-Origin：指定可访问资源的域名)
- postMessage(message, targetOrigin, [transfer])(HTML5 新增 API 用于多窗口消息、页面内嵌 iframe 消息传递),通过 onmessage 监听 传递过来的数据

- Websocket 是 HTML5 的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案
- Node 中间件代理
- Nginx 反向代理
- 各种嵌套 iframe 的方式，不常用
- 日常工作中用的最对的跨域方案是 CORS 和 Nginx 反向代理

#### Websocket

Websocket 是一个 持久化的协议， 基于 http ， 服务端可以 主动 push

- 兼容：
- FLASH Socket
- 长轮询： 定时发送 ajax
- long poll： 发送 --> 有消息时再 response

```
var ws = new WebSocket(url)
ws.onerror = fn
ws.onclose = fn
ws.onopen = fn
ws.onmessage = fn
ws.send()
```
