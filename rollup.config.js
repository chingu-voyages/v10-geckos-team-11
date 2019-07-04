import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const outputDir = 'dist'
const bundleName = 'bundle'
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${outputDir}/${bundleName}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${outputDir}/${bundleName}.esm.js`,
      format: 'esm'
    },
    {
      file: `${outputDir}/${bundleName}.umd.js`,
      format: 'umd',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [resolve(), production && terser()],
  external: ['react']
}
