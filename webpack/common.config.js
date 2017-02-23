'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src/index.js')
    ],

    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },

    context: path.resolve(__dirname, 'src'),

    devtool: 'inline-source-map',

    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'babel-loader',
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader?modules',
            'postcss-loader',
          ],
        },
      ]
    },

    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ]
    }
};
