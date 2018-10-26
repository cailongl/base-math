import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import config from './rollup.config'

config.output.file = 'dist/index.aio.js'
config.output.format = 'umd'
config.plugins = [
  resolve(),
  commonjs(),
].concat(config.plugins)

export default config