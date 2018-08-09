const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack')
module.exports = merge(common, {
  mode: "development",
  devtool: "inlin-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//结合webpack dev server使用
  ]
});
