var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');
var url = require('./base/url.config.js');
var configEntry = {};

pageArr.forEach((page) => {
  configEntry[page] = [path.resolve(dirVars.pagesDir, page + '/page'),'webpack/hot/dev-server','webpack-dev-server/client?'+url.webpackDevServer.localUrl];
});
module.exports = configEntry;
