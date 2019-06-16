var User_blog=require("../models/user_blog.js");

exports.blog=function(req,res,next){
	res.render("index_logined.ejs");
}