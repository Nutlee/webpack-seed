var express = require('express');
var app = express();
var webpackServer = require('./webpack.dev.server');
var routes = require('./routes/api');
var url = require('./webpack-config/base/url.config.js');

webpackServer(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/', routes);

app.listen(url.mockServer.port, function () {
  console.log('The app listening on port 3000 was started!');
});