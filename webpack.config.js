module.exports = {
  entry: require('./webpack-config/entry.dev.config.js'),

  output: require('./webpack-config/output.config.js'),

  module: require('./webpack-config/module.config.js'),

  resolve: require('./webpack-config/resolve.config.js'),

  plugins: require('./webpack-config/plugins.dev.config.js'),

  eslint: require('./webpack-config/vendor/eslint.config.js'),

  postcss: require('./webpack-config/vendor/postcss.config.js'),
  // devServer: {
  //     contentBase: 'build/',  //以public为根目录提供文件
  //     colors: true,
  //     historyApiFallback: true,
  //     inline: true,
  //     host: '192.168.2.66',
  //     port: 8080
  // }
  
  // devServer: {
  // 	proxy: {
  // 	    '/api/a': {
  // 	    	target: 'http://localhost:3000',
  // 	    	secure: false,
  // 	    	// bypass: function(req, res, proxyOptions) {
  // 	    	// 	// console.log(res);
  // 	    	//     if (req.headers.accept.indexOf('html') !== -1) {
  // 	    	//     	console.log(req.body);
  // 	    	//         console.log('Skipping proxy for browser request.');
  // 	    	//         res.send='HelloWorld bypass';
  // 	    	//     }
  // 	    	//     return false;
  // 	    	// },
  // 	    }
  // 	}
  // }
};
