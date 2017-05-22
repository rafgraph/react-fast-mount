module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': ['error', { props: false }],
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': ['error', { ignore: ['^react$'] }], // because React is a peer dependency
    'import/extensions': ['error', 'never'],
    'prettier/prettier': ['warn', { trailingComma: 'all', singleQuote: true }],
  },
};
