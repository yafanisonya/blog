---
title: TypeScript
---

## TS、JS 区别

1. 语法层面：TypeScript = JavaScript + Type（TS 是 JS 的超集）
2. 执行环境层面：浏览器、Node.js 可以直接执行 JS，但不能执行 TS（Deno 可以
   执行 TS）
3. 编译层面：TS 有编译阶段，JS 没有编译阶段（只有转译阶段和 lint 阶段）
4. 编写层面：TS 更难写一点，但是类型更安全
5. 文档层面：TS 的代码写出来就是文档，IDE 可以完美提示

## any、unknown、never 区别

### any V.S. unknown

二者都是顶级类型（top type），任何类型的值都可以赋值给顶级类型变量：

```
let foo: any = 123; // 不报错
let bar: unknown = 123; // 不报错
```

但是 unknown 比 any 的类型检查更严格，any 什么检查都不做，unknown 要求先收窄类型：

```
const value: unknown = "Hello World";
const someString: string = value;
// 报错：Type 'unknown' is not assignable to type 'string'.(2322)

const value: unknown = "Hello World";
const someString: string = value as string; // 不报错
```

如果改成 any，基本在哪都不报错。所以能用 unknown 就优先用 unknown，类型更
安全一点。

### never

never 是底类型，表示不应该出现的类型

## type、 interface 区别

1. 组合方式：interface 使用 extends 来实现继承，type 使用 & 来实现联合类型。
2. 扩展方式：interface 可以重复声明用来扩展，type 一个类型只能声明一次
3. 范围不同：type 适用于基本类型，interface 一般不行。
4. 命名方式：interface 会创建新的类型名，type 只是创建类型别名，并没有新创建
   类型。
