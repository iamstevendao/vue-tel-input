// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    "node": true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb"
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
  }
}
