import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueTelInput',
    file: 'dist/vue-tel-input.min.js',
    format: 'iife',
  },
});

config.plugins.push(terser());

config.plugins.push(
  resolve({
    mainFields: ["module", "jsnext:main", "main", "browser"]
  })
);

export default config;
