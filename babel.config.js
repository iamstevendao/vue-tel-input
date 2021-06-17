module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        modules: false,
        forceAllTransforms: true,
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
      },
    ],
  ],
};
