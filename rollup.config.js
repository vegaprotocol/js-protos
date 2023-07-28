import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    external: [
      /node_modules/
    ],
    input: [
      'dist/index.js',
    ],
    output: [
      {
        dir: 'cjs',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'lib',
        entryFileNames: '[name].cjs'
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  }
]
