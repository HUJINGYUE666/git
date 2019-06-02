var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'}); //headers包头 response headers 服务器向浏览器发包 Content-type:text/html html解析
    res.end('<h1>hello world</h1>') //response包体 页面显示 request headers 浏览器向服务器发包
}).listen(3000) //localhost:3000
console.log('server start port 3000')