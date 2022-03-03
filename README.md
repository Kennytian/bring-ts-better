# TypeScript to bring your code to the next level

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Kennytian/bring-ts-better/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/Kennytian/bring-ts-better.svg?style=flat-square)](https://github.com/Kennytian/bring-ts-better/graphs/contributors)
[![GitHub last commit](https://img.shields.io/github/last-commit/Kennytian/bring-ts-better.svg?style=flat-square)](https://github.com/Kennytian/bring-ts-better/commits/master)

## Installation
### PNPM
> On Linux or macOS:

`curl -fsSL https://get.pnpm.io/install.sh | sh -`

> On Windows (PowerShell):

`iwr https://get.pnpm.io/install.ps1 -useb | iex`

### Dependencies
`pnpm install`

## Development
Run following scripts
```
pnpm run decorators

pnpm run metadata
```

## Notebook
```ts

在 TypeScript 中，typeof 操作符可以用来获取一个变量声明或对象的类型。
keyof 操作符可以用来一个对象中的所有 key 值。
in 用来遍历枚举类型。
在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用。
定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。
-----------
Partial<T> 的作用就是将某个类型里的属性全部变为可选项。// {age:number} -> {age?:number}
Required<T> 的作用就是将某个类型里的属性全部变为必选项。// {age?:number} -> {age:number}
Readonly<T> 的作用是将某个类型所有属性变为只读属性，也就意味着这些属性不能被重新赋值。
Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
Pick<T, K extends keyof T> 的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。 // type TodoPreview = Pick<Todo, "title" | "completed">; // -> {title:string, completed: boolean}
Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉。// type T0 = Exclude<"a" | "b" | "c", "a">; // -> "b" | "c"
Extract<T, U> 的作用是从 T 中提取出 U。// type T0 = Extract<"a" | "b" | "c", "a" | "f">; // -> "a"
Omit<T, K extends keyof any> 的作用是使用 T 类型中除了 K 类型的所有属性，来构造一个新的类型。
NonNullable<T> 的作用是用来过滤类型中的 null 及 undefined 类型。
ReturnType<T> 的作用是用于获取函数 T 的返回类型。
InstanceType 的作用是获取构造函数类型的实例类型。
ThisType<T> 的作用是用于指定上下文对象的类型。
Parameters<T> 的作用是用于获得函数的参数类型组成的元组类型。
ConstructorParameters<T> 的作用是提取构造函数类型的所有参数类型。它会生成具有所有参数类型的元组类型（如果 T 不是函数，则返回的是 never 类型）。
```