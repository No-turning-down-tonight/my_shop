module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 0,'no-multiple-empty-lines':0,
    'import/no-duplicates':0,'no-useless-return':0,
    'object-curly-spacing':0,'standard/object-curly-even-spacing':0,
    'semi-spacing':0,'no-unused-vars':0,'keyword-spacing':0,'no-undef':0,
    'space-before-function-paren':0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
