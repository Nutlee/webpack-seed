var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var configURL = require('./webpack-config/base/url.config.js');

module.exports = function(app) {
  var server = new WebpackDevServer(webpack(config), {
    contentBase: 'build/',
    historyApiFallback: false,
    devtool: true,
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: configURL.webpackDevServer.url,
    proxy: {
        '*': {
         target: configURL.mockServer.url,
         secure: false,
        }
    },
    stats: { colors: true }
  }).listen(configURL.webpackDevServer.port, '0.0.0.0', function() {
    console.log('socketio listen 8080');
  });
}
