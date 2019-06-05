var Animal=require("./animal.js");
var util=require("util");
function Duck(){
	Animal.call(this);
	util.inherits(Duck,Animal);
	this.say=function(){
		console.log("ga...ga");
	}
}

var duck=new Duck();
module.exports=duck;