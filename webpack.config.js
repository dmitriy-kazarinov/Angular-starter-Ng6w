const path = require("path");
const webpack = require('webpack');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const pj = path.join;
const ROOT_DIR = path.resolve(__dirname);
const PUBLIC_PATH = process.env.PUBLIC_PATH || '/';
const SRC_DIR = pj(ROOT_DIR, 'app');
const DEST_DIR = pj(ROOT_DIR, 'public');
const NODE_MODULES_DIR = pj(ROOT_DIR, 'node_modules');

module.exports = {
  entry: {
    app: ["./app/app.module.js"]
  },
  output: {
    path: DEST_DIR,
    publicPath: "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/],
        loader: `ngtemplate?relativeTo=${SRC_DIR}/!html?attrs=false`,
      },
      {
        test: /src.*\.js$/,
        exclude: [/node_modules/],
        loaders: ['ng-annotate', 'babel-loader']
      }
    ]
  },
  plugins: [
      new ngAnnotatePlugin({
          add: true
      }),
      new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'app'],
    root: [
      NODE_MODULES_DIR,
      SRC_DIR
    ],
    extensions: ['', '.js', '.css'],
  },
  devServer: {
    inline:true,
    port: 8008
  }
};
