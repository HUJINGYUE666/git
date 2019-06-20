var db=require("./db.js");

// exports.sel_all=function(callback){
// 	var sql="select * from t_blogs";
// 	db.query(sql,[],callback);
// }

exports.sel_uid_by_data=function(uid,callback){
	var sql="select * from t_users,t_blogs,t_blog_catalogs where t_users.USER_ID=t_blogs.WRITER and t_blogs.CATALOG_ID=t_blog_catalogs.CATALOG_ID and t_blogs.WRITER=?";
	db.query(sql,[uid],callback);
}

exports.ins_blog_by_data=function(title,content,date,cid,uid,callback){
	var sql="insert into t_blogs(TITLE,CONTENT,ADD_TIME,CATALOG_ID,WRITER) values(?,?,?,?,?)";
	db.query(sql,[title,content,date,cid,uid],callback);
}

exports.sel_catalogs_by_id=function(uid,callback){
	var sql="select * from t_blog_catalogs where USER_ID=?";
	db.query(sql,[uid],callback);
}

exports.upd_catalog_by_count=function(cid,callback){
	var sql="update t_blog_catalogs set BLOG_COUNT=BLOG_COUNT+1 where CATALOG_ID=?";
	db.query(sql,[cid],callback);
}

exports.addBlogCatalog=function(name,uid,callback){
	var sql="insert into t_blog_catalogs(NAME,USER_ID) values(?,?)";
	db.query(sql,[name,uid],callback);
}

exports.updateBlog=function(bid,callback){
	var sql="select * from t_blogs where BLOG_ID=?";
	db.query(sql,[bid],callback);
}
 
