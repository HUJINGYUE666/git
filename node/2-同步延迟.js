var start = new Date();
setTimeout(function(){
    var end = new Date()
    console.log(end - start); //1001 window1000 chrome1001 firefox1003
},500)
while(new Date() - start<1000){}