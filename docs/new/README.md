---
title: 小程序登录及封装
---

## 用户登录流程

- 调用 wx.login() 获取 临时登录凭证 code ，并回传到开发者服务器。
- 调用 auth.code2Session 接口，换取用户唯一标识 OpenID 和会话密钥 session_key。自定义登录状态关联 openid 和 session_key，返回自定义登录状态
- 前端缓存自定义状态到 storage，wx.request()携带自定义登录状态请求数据
- 开发者服务器通过自定义登录状态查询 openid 和 session_key，验证通过返回业务数据

![登录流程](https://i.imgur.com/qoCwg3W.jpg)

## Request 封装

1. 在 app.js 配置域名

```
App({
  onLaunch: function() {
  },
  globalData: {
      userInfo: null,
      loginCode: null,
      version: '1.0.0',
      host: 'https://**',
  }
})
```

2. 封装 request
   > 在目录建立 api 文件夹，并在文件夹下创建 api.js

```
const app = getApp()

const request = (url, options) => {
   return new Promise((resolve, reject) => {
       wx.request({
           url: `${app.globalData.host}${url}`,
           method: options.method,
           data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
           header: {
               'Content-Type': 'application/json; charset=UTF-8',
               'x-token': 'x-token'  // 看自己是否需要
           },
           success(request) {
               if (request.data.code === 2000) {
                   resolve(request.data)
               } else {
                   reject(request.data)
               }
           },
           fail(error) {
               reject(error.data)
           }
       })
   })
}

const get = (url, options = {}) => {
   return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
   return request(url, { method: 'POST', data: options })
}

const put = (url, options) => {
   return request(url, { method: 'PUT', data: options })
}

// 不能声明DELETE（关键字）
const remove = (url, options) => {
   return request(url, { method: 'DELETE', data: options })
}

module.exports = {
   get,
   post,
   put,
   remove
}
```

3. 管理 api 接口
   > 在 page 中加入一个 api 文件夹,在下面在加入一个 api.js 来封装所有的接口

```
// 获取首页资源
const getMainPage = 'api/mainPage/getMainPage'

//抛出getMainPage这个常量
module.exports = {
  getMainPage
}
```

4. 使用封装过后的 api

```
// 引用api.js和request.js
import { getMainPage} from '../api/api.js'
import api from '../../utils/request.js'

// 在onload方法中调用接口和方法
onLoad: function(options) {
  //调用接口
  api.post(getMainPage).then(res => {
  //成功时回调函数
    console.log(res)
  }).catch(err => {
  //失败时回调函数
    console.log(err)
  })
},

```
