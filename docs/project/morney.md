---
title: React Money
---

## CSS Normalize、CSS Reset

- **CSS Normalize** :

  - 在 index.css 添加 @import-normalize
  - 保证页面在不同浏览器上默认样式相近

- **CSS Reset**
  - 重置浏览器的默认样式

## dart-sass、 node-sass 区别

> Dart Sass 是 Sass 的主要实现，最新的特性都会在这个上面先实现，快速、易于安装，并且可以编译为纯 JavaScript，从而可以轻松集成到现代 Web 开发工作流中。

- node-sass 是用 node (调用 cpp 编写的 libsass) 来编译 sass。

- dart-sass 是用 drat VM 来编译 sass。

- node-sass 是实时自动编译的，dart-sass 需要保存后才会生效。

## import 配置路径别名

- @import 'xxx/yyy' 引入 src/xxx/yyy.scss
- import 'xxx/yyy.tsx' 引入 src/xxx/yyy.tsx

> 在 tsconfig.json 添加 "baseUrl":"src"

```
{
  "compilerOptions": {
    "baseUrl": "src",
  },
  "include": [
    "src"
  ]
}
```

## styled-components

**CSS-in-JS**：将 CSS 样式写在 JS 文件里面

**如何使用**

- 安装 yarn add styled-components
- 安装 ts 类型声明文件 yarn add --dev @types/styled-components
- vscode 插件 vscode-styled-components

```
import React from 'react';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

<Wrapper>
  <Title>Hello World</Title>
</Wrapper>
```

## react-router-dom

**如何使用**

- yarn add react-router-dom
- yarn add --dev @types/react-router-dom
