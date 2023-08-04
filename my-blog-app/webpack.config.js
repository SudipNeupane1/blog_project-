// webpack.config.js
module.exports = {
  // Other configuration settings...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // Other loaders...
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  // Add the 'postcss-flexbugs-fixes' plugin here
                  require('postcss-flexbugs-fixes','postcss-preset-env'),
                  // Other PostCSS plugins...
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
