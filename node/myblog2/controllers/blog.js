var Blog_model=require("../models/blog_model.js");

// exports.index_logined=function(req,res,next){
// 	res.render("index_logined.ejs");
// }

exports.index_logined=function(req,res,next){
    Blog_model.sel_all(function(err,data){
		console.log(data);
		// res.render("index_logined",{
		// 	'blogs':data,
		// 	'sess':req.session,
		// })
	});
	// var uid=req.session.USER_ID;
	// Blog_model.sel_id_by_data(uid,function(err,data){
	// 	console.log(data);
	// 	res.render("index_logined",{
	// 		'blogs':data,
	// 		'sess':req.session,
	// 	})
	// });
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