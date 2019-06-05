//index.html  form  www.qq.com  IP 

var http=require("http");
var url=require("url");
var fs=require("fs");
var querystring=require("querystring");
var dns=require("dns");
var util=require("util");

http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	//console.log(pathname); //favicon.ico
	switch(pathname){
		case "/":
			goIndex(res);
			break;
		case "/parse":
			parseDns(req,res);
			break;
		default:
			res.writeHead(404,{"Content-type":"text/plain"});
			res.end("the page is gone");
	}
}).listen(3000);

console.log("server start port 3000");

function goIndex(res){
	var pathname=__dirname+"/static/"+url.parse("index.html").pathname;
	var indexPage=fs.readFileSync(pathname,"utf-8");
	res.writeHead(200,{"Content-type":"text/html"});
	res.write(indexPage);
	res.end();
}

function parseDns(req,res){
	req.setEncoding("utf8");
	var postData="";
	req.addListener("data",function(postChunkData){
		postData+=postChunkData
	});

	req.addListener("end",function(){
		//console.log(postData);
		var Param=querystring.parse(postData);
		var dname=Param.dnsname;
		dns.resolve4(dname,function(err,addresses){
			if(err){
				res.writeHead(500,{"Content-type":"text/plain"});
				res.end("server error");
			}else{
				res.writeHead(200,{"Content-type":"text/plain"});
				res.end(util.inspect(addresses))
			}
		})
	})
}
