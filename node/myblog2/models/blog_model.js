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
 
exports.upd_updateBlog_by_title=function(title,content,hid,callback){
	var sql="update t_blogs set TITLE=?,CONTENT=? where BLOG_ID=?";
	db.query(sql,[title,content,hid],callback);
}

exports.deleteBlog=function(bid,callback){
	var sql="delete from t_blogs where BLOG_ID=?";
	db.query(sql,[bid],callback);
}

exports.update_hits_by_bid=function(bid,callback){
	var sql="update t_blogs set CLICK_RATE=CLICK_RATE+1 where BLOG_ID=?";
	db.query(sql,[bid],callback);
}

//上一页数据
exports.get_up_by_one=function(bid,callback){
	var sql="select * from t_blogs where BLOG_ID<? ORDER BY BLOG_ID desc limit 1";
	db.query(sql,[bid],callback);
}

//下一页数据
exports.get_down_by_one=function(bid,callback){
	var sql="select * from t_blogs where BLOG_ID>? ORDER BY BLOG_ID asc limit 1";
	db.query(sql,[bid],callback);
}

// 编辑个人资料
exports.upd_updateUser_by_name=function(name,signature,uid,callback){
	var sql="update t_users set NAME=?,SIGNATURE=? where USER_ID=?";
	db.query(sql,[name,signature,uid],callback);
}

// 修改登录密码
exports.sel_pwd_by_pwd=function(pwd,callback){
	var sql="select * from t_users where PASSWORD=?";
	db.query(sql,[pwd],callback);
}