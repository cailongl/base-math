import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

import pkg from './package.json'

const version = pkg.version

const banner = `/*!
 * base-math ${version} (http://git.dtwave-inc.com/cailong.lcl/base-math)
 * API http://git.dtwave-inc.com/cailong.lcl/base-math/blob/master/doc/api.md
 * Copyright ${(new Date).getFullYear()} cailong. All Rights Reserved
 * Licensed under MIT (http://git.dtwave-inc.com/cailong.lcl/base-math/blob/master/LICENSE)
 */
`

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/base-math.js',
    format: 'umd',
    banner,
    sourceMap: 'inline',
    name: 'baseMath', // 模块名称，比如在浏览器的时候，window.baseMath
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    })
  ],
}