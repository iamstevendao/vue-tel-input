import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    name: 'vue-tel-input',
    file: 'dist/vue-tel-input.esm.js',
    format: 'es',
  },
});

export default config;
