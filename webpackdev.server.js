var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var proxy = require('proxy-middleware');
var url = require('url');

module.exports = function(app) {
  // 使用8081端口
  // app.use('/build', proxy(url.parse('http://localhost:8080/build')));

  var server = new WebpackDevServer(webpack(config), {
    contentBase: 'build/',
    historyApiFallback: false,
    devtool: true,
    // inline: true,
    hot: true,
    quiet: false,
    noInfo: false,
    // publicPath: 'http://192.168.1.113:8080/',
    proxy: {
        '*': {
         target: 'http://localhost:3000',
         secure: false,
        }
    },
    stats: { colors: true }
  }).listen(8080, '0.0.0.0', function() {
    console.log('socketio listen 8080')
  });
}
