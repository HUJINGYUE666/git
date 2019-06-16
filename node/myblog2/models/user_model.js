var db=require("./db.js");

exports.checkName=function(email,callback){
	var sql="select * from t_users where ACCOUNT=?";
	db.query(sql,[email],callback);
}

// exports.sel_email_by_pwd=function(email,pwd,callback){
// 	var sql="select * from t_users where ACCOUNT=? PASSWORD=?";
// 	db.query(sql,[email,pwd],callback);
// }

exports.sel_email_by_pwd=function(email,pwd,callback){
	var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
	db.query(sql,[email,pwd],callback);
}


