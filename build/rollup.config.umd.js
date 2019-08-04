import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-tel-input',
    file: 'dist/vue-tel-input.umd.js',
    format: 'umd',
  },
});

export default config;
