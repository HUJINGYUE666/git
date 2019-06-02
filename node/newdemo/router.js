//路由功能
var MainIndex=require("./main_index.js");
var ParseDns=require("./parse_dns.js");

exports.router = function(req,res,pathname){
    switch(pathname){
        case "/":
			//goIndex(res);
			MainIndex.goIndex(res);
			break;
		case "/parse":
			ParseDns.parseDns(req,res);
			break;
		default:
			res.writeHead(404,{"Content-type":"text/plain"});
			res.end("the page is gone");    
    }
}