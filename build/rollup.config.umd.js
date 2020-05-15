import resolve from '@rollup/plugin-node-resolve';
import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-tel-input',
    file: 'dist/vue-tel-input.umd.js',
    format: 'umd',
  },
});

config.plugins.push(
  resolve({
    mainFields: ["module", "jsnext:main", "main", "browser"]
  })
);

export default config;
