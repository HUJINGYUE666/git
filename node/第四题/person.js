function Person(){
    this.eat = function(){
        console.log('eating')
    };
    this.sleep = function(){
        console.log('sleeping')
    };
}

module.exports = Person;