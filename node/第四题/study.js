var person = require('./person');

function Student(){
    Person.call(this);
    util.inherits(Student,Person);
}

Student.