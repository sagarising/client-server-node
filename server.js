var http = require('http');

function controller(req,res){
	console.log('request url : ', req.url)
	if(req.url == '/male')
		res.end("Good Morning, Sir");
	
	res.end("Good Morning");
}




var server = http.createServer(controller);
server.listen(8000);
console.log("server started");
