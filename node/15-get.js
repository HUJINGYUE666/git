var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    console.log(url.parse(req.url).query);
    console.log(url.parse(req.url).pathname);
    console.log(req.method);
    console.log(req.headers);
}).listen(3000);

console.log('server start');