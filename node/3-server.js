var http = require('http');
var fs = require('fs');
var url = require("url");

http.createServer(function(req,res){
	var readPath = __dirname+'/'+url.parse("2.html").pathname;
	var indePage = fs.readFileSync(readPath,"utf-8");
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(indePage);
}).listen(3000);

console.log("server start port 3000");