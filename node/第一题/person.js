function Person(){
    this.code = function(){
        console.log('coding');
    }
}
var person = new Person();
module.exports = person;