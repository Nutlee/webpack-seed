const config = Object.assign(require('../core/_webpack.dev.config.js'), {
  entry: require('./webpack-config/entry.config.js'),
  output: require('./webpack-config/output.config.js'),
});

config.resolve.alias = Object.assign(config.resolve.alias, require('./webpack-config/alias.config.js'));
config.plugins = Object.assign(config.plugins, require('./webpack-config/plugins.config.js'));

module.exports = config;
