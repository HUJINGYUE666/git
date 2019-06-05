var util = require("util");
var Person = require('./person');

function Student(){
    Person.call(this);
    util.inherits(Student,Person);
}

Student.prototype.study = function(){
    console.log('learning')
}

module.exports = Student;