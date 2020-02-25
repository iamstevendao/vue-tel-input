module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        absoluteRuntime: false,
        version: require('@babel/runtime/package.json').version
      }
    ]
  ]
};
