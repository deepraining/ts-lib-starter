# ts-lib-starter

TypeScript Library Starter - A boilerplate for creating a JavaScript library, using TypeScript and Rollup.

> This repo is only for pure JavaScript library.

## Getting started

```
git clone https://github.com/senntyou/ts-lib-starter.git --depth=1

cd ts-lib-starter

npm install
```

- Source directory is `src`, and distribution directory is `lib`.
- The entry file is `src/index.ts`
- The distribution files are: `lib/index.js(commonjs), lib/m.js(esm), lib/umd.js(umd), lib/index.d.ts(typescript declaration file)`
- Build command: `npm run build`

## To build a library only for Node.js

If you want to build a library only for Node.js, you can make it as follows:

- Remove existed `rollup.config.js` file, and rename `rollup.node.config.js` to `rollup.config.js`.
- Remove `module, umd:main` fields of `package.json`.
