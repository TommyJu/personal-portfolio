module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: { attrs: '(fill|stroke)' }, // removes hardcoded fills and strokes
    },
    {
      name: 'preset-default',
      params: { overrides: { removeViewBox: false } }, // keep viewBox for scaling
    },
  ],
};