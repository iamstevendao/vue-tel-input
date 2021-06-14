// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    'node': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    'plugin:jest/recommended',
  ],
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  // add your custom rules here
  rules: {
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'el',
      ]
    }],
    'func-names': 'off',
    'no-console': [
      'warn',
      { allow: ['warn', 'error'] },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__vueClickOutside__'
        ]
      }
    ],
    'jest/prefer-to-have-length': 'warn',
  },
}
