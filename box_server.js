var http = require('http');
var url = require('url');
var port = process.env.PORT || 3000;
var logs=[];
var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});

	if (req.url == "/log"){
		console.log('result is %s', res);
		logs.push(res)
		console.log('added to the log array');
	} else {
		var query = url.parse(req.url).query
		if (query != undefined){
			console.log('got a query for %s', query);

			for (var i=0;i<logs.length;i++) {
				logs[i].write(query);
				logs[i].write('\n');
			}
		}
		res.end('ok');
	}
});
server.listen(port);
console.log('server is running at %s', port);