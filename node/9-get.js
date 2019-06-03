var http = require('http');
urls = ['www.qq.com','www.baidu.com','www.taobao.com'];
function fetchPage(url){
    var start = new Date();
    http.get({'host':url},function(res){
        console.log(url);
        console.log(new Date() - start);
    })
}
for(var i = 0; i<urls.length; i++){
    fetchPage(urls[i])
}