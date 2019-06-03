var fs = require('fs');
fs.readFile('./1-test.txt','utf-8',function(err,data){
    if(err){
        console.log(err)
    }else{
        getData(data)
    }
})
function getData(data){
    setTimeout(function(){ //写data undefined 不写data hello world
        console.log(data)
    },1000)
}