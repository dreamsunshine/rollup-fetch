// rollup plugins

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry:'es.es6',
  dest:'bundle.js',
  format:'cjs',
  sourceMap:true,
  plugins:[
    resolve({
      jsnext:true, //node模块迁移到es2015
      main:true,   //决定那个文件该被打包使用
      browser:true
    }),
    commonjs(),
    babel({
      exclude:'node_modules/**'
    })
  ]
}