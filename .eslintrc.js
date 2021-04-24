module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'no-console': 0,
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 1,
  },
  plugins: [
    'react',
    'prettier',
    'jsx-a11y',
  ],
};
