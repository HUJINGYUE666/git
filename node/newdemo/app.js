//入口文件
var http = require('http');
var url = ('url');
var router = ('router');

http.createServer(function(req,res){
    //1、获取url
    var pathname = url.parse(req.url).pathname;
    //2、调用router文件的touter方法(req,res,pathname)
    router.router(req,res,pathname);
}).listen(3000);

console.log("server start port 3000");