var Blog_model=require("../models/blog_model.js");
var moment=require("moment");

// exports.index_logined=function(req,res,next){
// 	res.render("index_logined.ejs");
// }

exports.index_logined=function(req,res,next){
    // Blog_model.sel_all(function(err,data){
	// 	console.log(data);
	// 	res.render("index_logined",{
	// 		'blogs':data,
	// 		'sess':req.session,
	// 	})
	// });
	var uid=req.session.USER_ID;
	Blog_model.sel_uid_by_data(uid,function(err,data){
		// console.log(data);
		res.render("index_logined",{
			'blogs':data,
			'sess':req.session,
		})
	});
}

exports.newblog=function(req,res,next){
	// res.render("newBlog.ejs");
	var uid=req.session.USER_ID;
	Blog_model.sel_uid_by_data(uid,function(err,data){
		// console.log(data);
		res.render("newBlog",{
			'catalogs':data,
			'sess':req.session,
		})
	});
}
exports.do_newblog=function(req,res,next){
	var title=req.body.title;
	var content=req.body.content;
	var date=moment().format();
	var uid=req.session.USER_ID;
	var cid=req.body.catalog;
	// console.log(cid);
	Blog_model.ins_blog_by_data(title,content,date,cid,uid,function(err,data){
		if(data.affectedRows>0){
			Blog_model.upd_catalog_by_count(cid,function(err,data){
				res.redirect("/index_logined");
			})	
        }
    })
}

exports.inbox=function(req,res,next){
	res.render("inbox.ejs");
}

exports.profile=function(req,res,next){
	res.render("profile.ejs");
}
// exports.do_profile=function(req,res,next){
// 	var name=req.body.name;
// 	var gender=req.body.gender;
// 	var province=req.body.province;
// 	var uid=req.session.USER_ID;
// 	Blog_model.ins_profile_by_data(name,gender,province,uid,function(err,data){
// 		console.log(data);
// 		// if(data.affectedRows>0){
// 		// 	res.redirect("/index_logined");
//         // }
//     })
// }

exports.chpwd=function(req,res,next){
	res.render("chpwd.ejs");
}
exports.userSettings=function(req,res,next){
	res.render("userSettings.ejs");
}
exports.blogCatalogs=function(req,res,next){
	// res.render("blogCatalogs.ejs");
	var uid=req.session.USER_ID;
	Blog_model.sel_uid_by_data(uid,function(err,data){
		// console.log(data);
		res.render("blogCatalogs",{
			'blogCatalogs':data,
			'sess':req.session,
		})
	});
}
exports.blogs=function(req,res,next){
	res.render("blogs.ejs");
}
exports.blogComments=function(req,res,next){
	res.render("blogComments.ejs");
} 