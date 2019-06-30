const config = {};

if (process.env.NODE_ENV === 'production') {
  Object.assign(config, {
    entry: './src/vue-tel-input.vue',
    filename: {
      js: 'vue-tel-input.js',
      css: 'vue-tel-input.css'
    },
    sourceMap: false,
    html: false,
    format: 'cjs'
  });
} else if (process.env.NODE_ENV === 'demo') {
  Object.assign(config, {
    entry: './demo/index.js',
    dist: 'docs',
    clean: false,
    sourceMap: false,
    homepage: '.',
    minimize: false,
    html: {
      template: './demo/index.html',
    },
  });
} else {
  Object.assign(config, {
    entry: './demo/index.js',
    sourceMap: false,
    html: {
      template: './demo/index.html',
    },
  });
}

module.exports = config;
