var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');
var uc = require('upper-case');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.end(uc(txt));
}).listen(8090);