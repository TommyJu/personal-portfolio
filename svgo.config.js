module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false, // keep viewBox for proper scaling
        },
      },
    },

    // Remove hard-coded fill, stroke, and style attributes
    {
      name: "removeAttrs",
      params: {
        attrs: "(fill|stroke|style)",
      },
    },

    // Add fill="currentColor" to the root <svg>
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          { fill: "currentColor" }
        ],
      },
    },
  ],
};