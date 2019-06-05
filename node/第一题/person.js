//(1)方法
// function Person(){
//     this.say = function(){
//         console.log('saying');
//     };
//     this.eat = function(){
//         console.log('eating');
//     }
// }
// module.exports = Person;

//(2)对象
// function Person(){
//     this.say = function(){
//         console.log('saying');
//     };
//     this.eat = function(){
//         console.log('eating');
//     }
// }
// var person = new Person();
// module.exports = person;

// module.exports = {
//     'say':function(){
//         console.log('saying')
//     },
//     'eat':function(){
//         console.log('eating')
//     }
// }

//(3)数组
module.exports = ['saying','eating'];