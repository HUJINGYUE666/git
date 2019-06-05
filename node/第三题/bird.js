var Animal=require("./animal.js");
var util=require("util");
function Bird(){
	Animal.call(this);
	util.inherits(Bird,Animal);
	this.say=function(){
		console.log("ji...ji");
	}
}

module.exports=Bird;