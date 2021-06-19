module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      process.env.MODERN ? {
        targets: {
          browsers: "last 2 chrome version, last 2 firefox version, last 2 edge version, last 1 safari version",
        },
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
      } : {
        targets: {
          browsers: "> .5%, last 2 versions, not dead",
        },
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
      },
    ],
  ],
};
