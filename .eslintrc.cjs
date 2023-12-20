/* eslint-disable @typescript-eslint/no-var-requires */
const { autoImportPackage } = require('./.eslintrc-auto-import.json')
module.exports = {
  extends: '@cc-heart/eslint-config',
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'laster',
  },
  ...autoImportPackage
}
