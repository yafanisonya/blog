---
title: TypeScript
---

### TypeScript

#### 什么是 TypeScript

- TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法
- TypeScript 通过类型注解提供编译时的静态类型检查
- TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译

```
const hello = (name: any) => {
  console.log(`Hello, ${name}`)
}

hello('TypeScript')
```

##### 原始数据类型

```
const a: string = 'foobar'
const b: number = 100
const c: boolean = true
const e: void = undefined
const f: null = null
const g: undefined = undefined
const h: symbol = Symbol()
```

##### Object 类型

```
const foo1: object = function(){}

const foo2: { foo: number, bar: string} = { foo: 123, bar: 'string'}
```

##### 数组类型

```
const arr1: Array<number> = [1, 2, 3]

const arr2: number[] = [1, 2, 3]
```

##### 元组 Tuple

```
const tuple1: [number, string] = [19, 'fanison']

const entries: [string, number][] = Object.entries({
  foo: 123,
  bar: 456
})

const [key, value] = entries[0]
// key => foo, value => 123
```

##### 枚举 Enum

```
enum PostStatus {
  Draft = 6,
  Unpublished, // 7
  Published // 8
}
```

##### 函数类型

```
function func1(a: number, b: number): string{
  return 'func1'
}

const func2: (a: number, b: number) => string = function(a: number, b:number): string{
  return 'func2'
}
```

##### 任意类型

```
function stringify(value: any){
  return JSON.stringify(value)
}
```

##### 隐式类型推断

```
let age = 19 // number
let foo = 'str' // string
```

##### 类型断言

```
const nums = [110, 120, 130, 140]
const res = nums.find(i => i > 0)

const num1 = res as number
// JSX 下不能使用
const num2 = <number>res
```

##### 接口

```
interface Post{
  title: string
  age: number
  // 可选成员
  subtitle?: string
  // 只读成员
  readonly summary: string
}

function printPost(post: Post){
  console.log(post)
}

printPost({
  title: 'this is title',
  age: 18，
  summary: 'read text'
})

interface Cache{
  [prop: string]: string
}
const cache: Cache = {}
cache.foo = 'value1'
```

##### 类

```
class Person {
  name: string
  age: number

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }

  sayHi(msg: string): void{
    console.log('name and msg',name,msg)
  }
}
```

##### 类与接口

- 类使用 implements 关键字实现多个接口

```
interface Eat {
  eat(food: string): void
}

interface Run {
  run(distance: number): void
}

class Person implements Eat, Run {
  eat(food: string): void {
    console.log('eat ==>',food)
  }

  run(distance: number){
    console.log('run ==>', run)
  }
}
```

##### 抽象类

- 定义一个抽象类，并定义一个抽象方法
- 抽象类中的抽象方法必须被子类实现

```
abstract class Animal{
  eat(food: string): void {
    console.log('eat ==>',food)
  }
  abstract run(distance: number): void
}

class Dog extends Animal {
  run(distance: number): void {
    console.log('run ==>', distance)
  }
}

const d1 = new Dog()
d.run(200)
```

##### 泛型

```
function createNumber(length: number, value: number): number[] {
  const arr = Array<number>(length).fill(value)
  return arr
}

function createString(length: number, value: string): string[] {
  const arr = Array<string>(length).fill(value)
  return arr
}

function createArray<T>(length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}

const res1 = createArray<string>(3,'foo')
const res2 = createArray<number>(3,3)
```
