var express = require('express');
var mock = require('mockjs');
var router = express.Router();

router.route('/api/test')
	.get(function(req, res, next) {
		var data = mock.mock({
		    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
		    'list|1-10': [{
		        // 属性 id 是一个自增数，起始值为 1，每次增 1
		        'id|+1': 1
		    }]
		});
		res.send(data);
	});

router.route('/api/')
	.get(function(req, res, next) {
		res.send('Hello API!');
	});
	
router.route('/api/post')
	.post(function(req, res, next) {
		res.send('Got a POST request');;
	});

module.exports = router;
