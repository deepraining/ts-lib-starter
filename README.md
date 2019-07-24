# ts-lib-starter

[English Documentation](./README.en.md)

一个用于快速创建 JavaScript 组件库的模板脚手架，使用 TypeScript 与 Rollup 构建.

## 快速开始

```
git clone https://github.com/senntyou/ts-lib-starter.git --depth=1

cd ts-lib-starter

npm install             # 安装依赖

npm run build           # 构建发布文件
```

## 特性

- [TypeScript](http://www.typescriptlang.org/) 语法, [jest](https://jestjs.io/en/) 测试支持.

## 构建只在 Node.js 中使用的库

如果构建只在 Node.js 中使用的库，可以如下做：

- 删除已有的 `rollup.config.js` 文件, 然后重命名 `rollup.node.config.js` 为 `rollup.config.js`.
- 删除 `package.json` 的 `module, umd:main` 字段.

## 注意

- 这个项目只用于构建纯 JavaScript 库.
