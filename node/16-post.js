var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            resIndex(res);
            break;
        case '/add':
            resData(req,res);
            break;
        default:
            res.writeHead(404,{'Content-type':'text/html'});
            res.end('the page is gone');
    }
}).listen(3000);
console.log('server start port 3000')

function resIndex(res){
    var pathname = __dirname+'/static/'+url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(pathname,'utf-8');
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(indexPage);
}

function resData(req,res){
    var postData = '';
    req.setEncoding('utf8');
    req.addListener('data',function(postDataChunk){
        postData += postDataChunk;  
    });
    req.addListener('end',function(){
        var Param = querystring.parse(postData);
        console.log(Param);
        // var str = Param.uname;
        // res.writeHead(200,{'Content-type':'text/html'});
        // res.end(str);
    });
}