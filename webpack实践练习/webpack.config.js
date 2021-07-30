const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let mode = "development"
let target = "web"
if (process.env.NODE_ENV === "production") {
  mode = "production"
  target = "browserslist"
}

module.exports = {
  mode: mode,
  target:target, //webpack bug 热更新失效，如果不设置，默认情况下环境是browserslist


  module: {
    rules: [
      {
        test:/\.s?css$/i,
        use:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot:true  //热更新，真的牛批，可以大幅提升速度
  },
}