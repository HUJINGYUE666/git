var db=require("./db.js");

// exports.sel_all=function(callback){
// 	var sql="select * from t_blogs";
// 	db.query(sql,[],callback);
// }

exports.sel_uid_by_data=function(uid,callback){
	var sql="select * from t_users,t_blogs,t_blog_catalogs where t_users.USER_ID=t_blogs.WRITER and t_blogs.CATALOG_ID=t_blog_catalogs.CATALOG_ID and t_blogs.WRITER=?";
	db.query(sql,[uid],callback);
}

exports.ins_blog_by_data=function(title,content,date,uid,callback){
	var sql="insert into t_blogs(TITLE,CONTENT,ADD_TIME,WRITER) values(?,?,?,?)";
	db.query(sql,[title,content,date,uid],callback);
}