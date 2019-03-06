/* eslint-disable import/no-extraneous-dependencies */
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';

export default [
  {
    file: 'lib/index.js',
    format: 'cjs',
  },
  {
    file: 'lib/m.js',
    format: 'esm',
  },
  {
    file: 'lib/umd.js',
    format: 'umd',
    name: 'Lib',
  },
].map(output => ({
  input: 'src/index.ts',
  output,
  plugins: [typescript(), json()],
}));
