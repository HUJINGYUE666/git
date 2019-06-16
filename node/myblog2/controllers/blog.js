var User_blog=require("../models/user_blog.js");

exports.index_logined=function(req,res,next){
	res.render("index_logined.ejs");
}

exports.newblog=function(req,res,next){
	res.render("newBlog.ejs");
}

exports.inbox=function(req,res,next){
	res.render("inbox.ejs");
}
exports.profile=function(req,res,next){
	res.render("profile.ejs");
}
exports.chpwd=function(req,res,next){
	res.render("chpwd.ejs");
}
exports.userSettings=function(req,res,next){
	res.render("userSettings.ejs");
}
exports.blogCatalogs=function(req,res,next){
	res.render("blogCatalogs.ejs");
}
exports.blogs=function(req,res,next){
	res.render("blogs.ejs");
}
exports.blogComments=function(req,res,next){
	res.render("blogComments.ejs");
} 