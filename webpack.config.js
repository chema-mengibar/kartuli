const path = require('path');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
require('dotenv').config();

module.exports = function( env, argv) {

  // const isEnvDevelopment = env === 'development';
  // const isEnvProduction = env === 'production';

  const isDevelopment = argv.mode === 'development';

  const replaceEnv = {
    domain:  isDevelopment ? 'http://localhost:3000/' : process.env.DOMAIN,
  }

  return {
    mode: argv.mode,
    devtool: ( isDevelopment
        ? '#eval-source-map' 
        : 'source-map'),
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: "/",
      filename: 'app.js'
    },
    resolve: {
      extensions: [".tsx", ".ts",".jsx",".js"], 
      // alias: {
      //   'react-dom': '@hot-loader/react-dom'
      // }
    },
    module: {
      rules: [
        { 
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'] 
          // use: ['react-hot-loader/webpack', 'babel-loader'] 
        },
        {
          test: /\.ts$|\.tsx$/,
          loader: 'ts-loader',
        },
      ]
    },
    devServer: {
      contentBase: "./public",
      index: 'index.html',
      hot: true,
      quiet: true,
      historyApiFallback: true,
      // allowedHosts: ['localhost'],
      // port: 3000,
      // publicPath: '/dist',
      // open: true,
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            template: path.resolve( __dirname, 'src/index.html' ),
            filename: 'index.html',
            inject: false 
          },
          isDevelopment ?
          { }
          : undefined
        )
      ),
      new HtmlReplaceWebpackPlugin([
        {
          pattern: '___DOMAIN___',
          replacement: replaceEnv.domain
        },
      ])
    ]
  }
};