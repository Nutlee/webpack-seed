//  webpack-dev-server 和 mock 服务器的 ip 及端口配置
var url = {
	webpackDevServer : {
		ip: 'http://192.168.2.66',
		port: '8080',
		localUrl: 'http://localhost:8080',
		url: 'http://192.168.2.66:8080',
	},
	mockServer: {
		ip: 'http://localhost',
		port: '3000',
		url: 'http://localhost:3000',
	},
	index: 'http://localhost:8080'
};

module.exports = url;