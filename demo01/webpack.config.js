var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  entry: { // 入口
    index: './src/index.js',
  },
  output: { // 输出
    path: __dirname + "/build",
    filename: '[name].[hash].js'
  },
  module: {
    // 规则
    rules: [
      // 加载 .vue 结尾的文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // 加载 .js 结尾的文件
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-0'],
        }
      },
      // 加载 .less 结尾的文件
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      // 加载图片和图标
      {
        test: /\.(png|jpg|gif|ttf)$/,
        loader: 'url-loader',
        options: {
          name: 'img/[name].[ext]?[hash:7]'
        }
      },
    ]
  },
  devServer: {
    contentBase: './build',
    inline: true,
    hot: true,
    port: 7777,
  },
  plugins: [
    // 模块热替换插件
    new webpack.HotModuleReplacementPlugin(),
    // 自动生成 html 插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index']
    }),
    // css 单独打包插件
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new VueLoaderPlugin(),
  ]
}

