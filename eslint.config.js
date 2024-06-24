import { vue, typescript } from '@cc-heart/eslint-config'

export default [
  ...vue({
    typescript: true,
    autoImport: true,
    parserOptionsOverrides: {
      project: false,
    },
  }),
  ...typescript({
    parserOptionsOverrides: {
      project: ['./tsconfig.node.json', './tsconfig.json'],
    },
  }),
]
