var http = require('http');

function controller(req,res){
	console.log('request url : ', req.url)
	if(req.url == '/male')
		res.end("Good Morning, Sir");
	if(req.url == '/female')
		res.end("Good Morning, Mam");
	res.end("Sorry I didn't get that!");
}




var server = http.createServer(controller);
server.listen(8000);
console.log("server started");
