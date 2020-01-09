module.exports = {
  root: true,
  env: {
    node: true,
    "jest/globals": true
  },
  extends: [
    'airbnb'
  ],
  plugins: ['jest'],
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        js: 'never',
      },
    ],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'change',
          'changeHandle',
          'beforeHandle',
          'setTitle',
          'bindKeyUp',
          'setScroll',
          'returnModel',
          'popoverClick',
        ],
      },
    ],
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '^V|Moment|Entity$|ENUM$' },
    ],
    'no-underscore-dangle': ['error', { allow: ['_componentTag'] }],
    'spaced-comment': 'off',
    'no-dupe-keys': 'off',
    'no-console': 'always',
    'no-extend-native': 'off',
    'no-plusplus': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-console': 'error',
    'no-debugger': 'error'
  }
};
