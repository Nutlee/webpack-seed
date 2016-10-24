var express = require('express');
var app = express();
var webpackServer = require('./webpack.dev.server');

webpackServer(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('The app listening on port 3000 was started!');
});

app.get('/api/*', function (req, res) {
  res.send('Hello API!');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});