import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    name: 'vue-tel-input',
    dir: 'dist/esm',
    format: 'es',
  },
});

export default config;
