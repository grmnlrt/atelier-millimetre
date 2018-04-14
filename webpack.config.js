"use strict";
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  context: __dirname + "/source",
  entry: {
    site: "./javascripts/site.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options :  {
          presets  :  [ 'es2015' ]
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ],//end rules
  },
  output: {
    path: __dirname + "/build/javascripts",
    filename: "[name].js"
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin({
      filename:  (getPath) => {
        return getPath("[name].bundle.css").replace("css/js", "css");
      },
      disable: false,
      allChunks: true,
    }),
  ],
};
