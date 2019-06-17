var db=require("./db.js");

exports.checkName=function(email,callback){
	var sql="select * from t_users where ACCOUNT=?";
	db.query(sql,[email],callback);
}

exports.insert_data=function(email,pwd,callback){
	var sql="insert into t_users(ACCOUNT,PASSWORD) values(?,?)";
	db.query(sql,[email,pwd],callback);
}

exports.sel_email_by_pwd=function(email,pwd,callback){
	var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
	db.query(sql,[email,pwd],callback);
}
 

