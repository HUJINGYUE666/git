var db=require("./db.js");

exports.insert_data=function(email,pwd,callback){
	var sql="insert into user(ACCOUNT,PASSWORD) values(?,?)";
	db.query(sql,[email,pwd],callback);
}