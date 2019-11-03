const path = require('path');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = function( env, argv) {

  const isEnvDevelopment = env === 'development';
  const isEnvProduction = env === 'production';

  const isDevelopment = argv.mode === 'development';

  const replaceEnv = {
    raw:{
      "PUBLIC_URL": 'publicUrl',
    }
  }

  /*
  process.argv.includes('--profile');
  process.env.EXTEND_ESLINT === 'true'
  */

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
      extensions: [".jsx",".js"],
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
        }
      ]
    },
    devServer: {
      contentBase: "./public",
      index: 'index.html',
      hot: true,
      quiet: true,
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
            template: path.resolve( __dirname, 'public/index.html' ),
            inject: false 
          },
          isEnvProduction ?
          { }
          : undefined
        )
      )
    ]
  }

};