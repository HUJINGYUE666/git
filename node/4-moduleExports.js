
function Demo(){
    var c = 3;
    this.a = 1;
    this.b = function(){
        console.log(c)
    }
}
// exports.call = Demo; //公布
module.exports = Demo;
 