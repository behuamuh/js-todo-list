module.exports = {
  extends: [
    'eslint:recommended',
  ],
  env: {
    'browser': true,
    'node': true,
    'commonjs': true,
    'jest': true,
    'es6': true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'eol-last': ['error', 'always'],
  },
};
