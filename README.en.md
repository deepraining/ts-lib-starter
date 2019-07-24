# ts-lib-starter

[中文文档](./README.md)

A boilerplate for creating a JavaScript library, using TypeScript and Rollup.

## Getting started

```
git clone https://github.com/senntyou/ts-lib-starter.git --depth=1

cd ts-lib-starter

npm install             # install dependencies

npm run build           # build distribution files
```

## Features

- [TypeScript](http://www.typescriptlang.org/) language, [jest](https://jestjs.io/en/) test support.

## To build a library only for Node.js

If you want to build a library only for Node.js, you can make it as follows:

- Remove existed `rollup.config.js` file, and rename `rollup.node.config.js` to `rollup.config.js`.
- Remove `module, umd:main` fields of `package.json`.

## Notes

- This repo is only for pure JavaScript library.
