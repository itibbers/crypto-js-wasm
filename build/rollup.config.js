const path = require('path')
const babel = require('@rollup/plugin-babel')

const uniqResolve = (p) => {
  return path.resolve(__dirname, './', p)
}

module.exports = {
  input: uniqResolve('../src/index.js'),
  output: {
    file: uniqResolve('../lib/index.js'),
    format: 'umd',
    name: 'CryptoJSPro',
  },
  plugins: [
    babel.babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-proposal-class-properties'],
    }),
  ],
}
