//静态资源管理器
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    // var pathname = __dirname+'/static/'+url.parse('demo.html').pathname;
    // var indexPage = fs.readFileSync(pathname,'utf-8');
    // res.writeHead(200,{'Content-type':'text/html'});
    // res.end(indexPage);
    var pathname = url.parse(req,url).pathname;
    var pathname = __dirname+'/static/'+pathname;
    if(path == '/favicon.ico'){
        return
    }else if(pathname == './' || pathname == '/index'){
        goIndex(res)
    }else{
        dealWithStatic(pathname,realPath,res)
    }
}).listen(3000);

console.log('server star port 3000')

function goIndex(res){
    var pathname = __dirname+'/static/'+url.parse('demo.html').pathname;
    var indexPage = fs.readFileSync(pathname,'utf-8');
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(indexPage);
}

function dealWithStatic(pathname,realPath,res){
    fs.exists(realPath,function(exists){
        if(!exists){
            res.writeHead(404,{'Content-type':'text/plain'});
            res.end('the request url was wrong');
        }else{
            var pointPosition = pathname.lastIndexOf('.');
            var mmieString = pathname.subString(pointPosition+1);
            var mmieType;
            switch(mmieString){
                case 'css':
                    MimeType = 'text/css';
                    break;
                case 'jpg':
                    mmieType = 'image/jpeg';
                    break;
                default:
                    mmieType = 'text/plain';
            }
            fs.readFile(realPath,'binary',function(err,file){
                if(err){
                    res.writeHead(500,{'Content-type':'mmieType'})
                }
            })
        }
    })
}