var db=require("./db.js");
 
exports.insert_data=function(name,pass,callback){

	//var sql="select * from user where uname='"+name+"'";
	var sql="insert into user(uname,pass) values(?,?)";
	db.query(sql,[name,pass],callback);
}

exports.checkName=function(name,callback){
	var sql="select * from user where uname=?";
	db.query(sql,[name],callback);
}

exports.sel_name_by_pass=function(name,pass,callback){
	var sql="select * from user where uname=? and pass=?";
	db.query(sql,[name,pass],callback);
}




/*
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'newblog'
});

exports.insert_data=function(name,pass,callback){
	//连上数据库  当前数据库引擎  用户名密码配置好
	connection.connect();
 
	connection.query('select * from user', function (error, results, fields) {
	  if (error) throw error;
	  //console.log(results);
	  callback(error,results);
	  connection.end();
	});
}*/