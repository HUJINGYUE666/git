var http = require('http');
var url = require('url');
var querystring = require('querystring')

http.createServer(function(req,res){
    // console.log(url.parse(req.url).query);
    // console.log(url.parse(req.url).pathname);
    // console.log(req.method);
    // console.log(req.headers);
    var urlstr = url.parse(req.url).query;
    var urlobj = querystring.parse(urlstr);
    console.log(urlobj);
}).listen(3000);

console.log('server start port 3000');
