console.log('hello') //node js
console.log('start')
for(var i=0; i<5; i++){
    setTimeout(function(){
        console.log(i)
    },0)
}
console.log('end')