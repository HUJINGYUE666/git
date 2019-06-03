var fs = require('fs');
// var data = fs.readFileSync('./1-test.txt','utf-8');
// console.log(data); //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64> hello world
var data = fs.readFile('./1-test.txt','utf-8',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data) //hello world
    }
})