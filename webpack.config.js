const glob = require("glob");
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

const test = glob.sync("./solana-web3.js")[0];

module.exports = {
  mode: "production",
  entry: {
    "test": test,
  },
  optimization: { minimize: false }, // use for debugging
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "Build")
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  module: {
  rules: [
        {
          test: path.resolve(test),
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [],
              plugins: [require("./BabelPlugin.js")]
            }
          }
        }
      ]
  },
  plugins: []
};

