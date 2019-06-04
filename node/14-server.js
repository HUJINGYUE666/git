var http = require('http');
var url = require('url');
var fs = require('fs')

http.createServer(function(req,res){
    //console.log(url.parse(req.url).pathname);
    var urlstr=url.parse(req.url).pathname;
    switch(urlstr){
        case '/':
            parseIndex(res);
            break;
        case '/img':
            parseImg(res);
            break;
        default:
            res.writeHead(404,{'Content-type':'text/html'});
            res.end('the page is gone');
    }
}).listen(3000);
console.log('server start port 3000')

function parseIndex(res){
    var readPath = __dirname+'/static/'+url.parse('dns.html').pathname;
    // console.log(readPath);
    var indePage = fs.readFileSync(readPath,'utf-8');
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(indePage);
}