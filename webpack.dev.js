const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack')
const path = require('path')
module.exports = merge(common, {
  mode: "production",
  devtool: "inlin-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//结合webpack dev server使用
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
});
