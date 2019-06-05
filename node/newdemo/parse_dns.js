var querystring=require("querystring");
var dns=require("dns");
var util=require("util");
exports.parseDns=function(req,res){
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