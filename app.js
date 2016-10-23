var express = require('express');
var app = express();
require('./webpackdev.server')(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/a', function (req, res) {
  res.send('Hello World!');
});
app.get('/api/*', function (req, res) {
  res.send('Hello API!');
});
app.post('/', function (req, res) {
  res.send('Got a POST request');
});