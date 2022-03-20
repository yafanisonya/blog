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

## webpack 引入 svg-sprite-loader

> create-react-app 安装以后，没有 webpack 相关的配置的目录，通过 yarn eject 进行自定义配置

**svg 雪碧图**:利用 svg 的 symbol 元素，将每个 icon 包括在 symbol 中，通过 use 元素使用该 symbol.

**原理**

- symbol + use:xlink:href
- svg-sprite-loader 生成雪碧图
- require.context 动态引入所有文件

**如何配置**

```
{
  test: /\.svg$/,
  use: [
    { loader: 'svg-sprite-loader', options: {} },
    {
      loader: 'svgo-loader', options: {
        plugins: [
          { removeAttrs: { attrs: 'fill' } }
        ]
      }
    }
  ]
},
```

**如何使用**

```
// 引入单个
require('icons/money.svg')

<svg>
  <use xlinkHref="#money">
</svg>

// 引入多个
import React from 'react';
import cs from 'classnames';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
	requireContext.keys().forEach(requireContext);
try {
	importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
	console.log(error);
}

type Props = {
	name?: string;
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
	const {name, children, className, ...rest} = props
	return (
		<svg className={cs('icon',className)} {...rest}>
			{props.name && <use xlinkHref={'#' + props.name}></use>}
		</svg>
	);
};

export default Icon;
```
