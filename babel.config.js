module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      process.env.MODERN ? {
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
      } : {
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
      },
    ],
  ],
};
