var dns = require('dns');
dns.resolve4('www.baidu.com',function(err,address){
    if(err){
        console.log(err)
    }else{
        console.log(address)
    }
})