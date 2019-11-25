import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
const version = process.env.VERSION || require('./package.json').version
const banner =
`/**
 * rollup-base-template v${version}
 * (c) ${new Date().getFullYear()} Twittytop
 * @license MIT
 */`;

console.log(process.env.ROLLUP_WATCH);
let terserOptions = {};
if (process.env.NODE_ENV === 'production') {
  terserOptions.compress = {
    drop_debugger: true,
    drop_console: true,
    pure_funcs: ['console.log'] //移除console
  };
}

export default {
  input: 'src/index.js',
  output: {
    banner,
    file: 'dist/index.js',
    format: 'umd',
    name: 'jslib',
  },
  plugins: [
    resolve({
      mainFields: ['module', 'main'],
      browser: true,
      // main 和 browser 属性将使插件决定将那些文件应用到bundle中
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    process.env.NODE_ENV !== 'development' && terser(terserOptions)
  ]
};
