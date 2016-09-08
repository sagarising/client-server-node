var http = require('http');

function controller(req,res){
	console.log('request url : ', req.url)
	res.end('Good Morning');
}




var server = http.createServer(controller);
server.listen(8000);
console.log("server started");
