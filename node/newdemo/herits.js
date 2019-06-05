var util=require("util");
var events=require("events");

//创建MyStream  ---->继承自 events.EventEmitter
//继承分两步  1、把父类的动态成员方法拷贝给子类  call apply bind
//2、让子类的构造函数能访问到父类的构造函数 java:super()  php:parent::__construct()  :inherit(子construct，父construct);
    //node:inherit(子construct，父construct);
function MyStream(){
	events.EventEmitter.call(this);
}
util.inherits(MyStream,events.EventEmitter);

MyStream.prototype.write=function(data){
	this.emit("data",data);
}

var stream=new MyStream();

console.log(stream instanceof events.EventEmitter);
console.log(MyStream.super_===events.EventEmitter);

stream.on("data",function(data){
	console.log("received data: "+data);
});

stream.write("hello");
