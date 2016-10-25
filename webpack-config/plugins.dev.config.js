var webpack = require('webpack');
var pluginsConfig = require('./inherit/plugins.config.js');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var url = require('./base/url.config.js');

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: false,
}));

module.exports = pluginsConfig;
