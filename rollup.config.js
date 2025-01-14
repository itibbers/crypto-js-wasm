import { babel } from '@rollup/plugin-babel'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    },
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'CryptoJSPro'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-proposal-class-properties']
    })
  ]
}
