var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var parameter = url.parse(req.url, true).query;
    res.write('Hello World. It\'s ' + parameter.season + ' now. But the weather is ' + parameter.weather + '.');
    res.end();
}).listen(8090);