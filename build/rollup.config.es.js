import resolve from 'rollup-plugin-node-resolve';
import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    dir: 'dist',
    format: 'es',
  },
});

config.plugins.push(
  resolve({
    mainFields: ["module", "jsnext:main", "main", "browser"]
  })
);

export default config;
