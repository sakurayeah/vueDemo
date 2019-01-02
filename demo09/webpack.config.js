var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // mode: 'production',
  entry: { // 入口
    index: './src/index.js',
    vendors: ['vue', 'vue-router', 'vuex']
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
        exclude: /node_modules/,
      },
      // 加载 .js 结尾的文件
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'stage-0'],
          plugins: ["transform-runtime"]
        },
      },
      // 加载 .less 结尾的文件
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader'
        ],
        exclude: /node_modules/,
      },
      // 加载图片和图标
      {
        test: /\.(png|jpg|gif|ttf)$/,
        loader: 'url-loader',
        exclude: /node_modules/,
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
  optimization: {
    // 提取入口文件里面的公共模块
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: "all",
          minSize: 1,
          priority: 10
        },
      }
    }
  },
  plugins: [
    // 模块热替换插件
    new webpack.HotModuleReplacementPlugin(),
    // 自动生成 html 插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['vendors', 'index']
    }),
    // css 单独打包插件
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new VueLoaderPlugin(),
  ]
}

