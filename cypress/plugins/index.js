const wp = require('cypress-webpack-preprocessor-v5');

module.exports = (on) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          {
            test: /.tsx?/,
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    },
  };

  on('file:preprocessor', wp(options));
};
