function haveLunch(food,drink,callback){
    console.log(food + drink);
    if(callback && typeof(callback) === 'function'){
        setTimeout(function(){
            callback();
        },1000)
    }
}
haveLunch('toast','coffee',function(){
    console.log('lunch finished')
})  