var Blog_model=require("../models/blog_model.js");
var moment=require("moment");

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
	var uid=req.session.USER_ID;
	Blog_model.sel_catalogs_by_id(uid,function(err,data){
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
	var cid=req.body.catalog;
	var uid=req.session.USER_ID;
	// console.log(cid);
	Blog_model.ins_blog_by_data(title,content,date,cid,uid,function(err,data){
		if(data.affectedRows>0){
			Blog_model.upd_catalog_by_count(cid,function(err,data){
				res.redirect("/index_logined");
			})	
        }
    })
}

exports.updateBlog=function(req,res,next){
	var bid=req.query.bid;
	Blog_model.updateBlog(bid,function(err,data){
		if(data.length>0){
			res.render("updateBlog",{
				"sess":req.session,
				"blog":data[0],
			});
		}
	})
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
	var uid=req.session.USER_ID;
	Blog_model.sel_catalogs_by_id(uid,function(err,data){
		// console.log(data);
		res.render("blogCatalogs",{
			'blogCatalogs':data,
			'sess':req.session,
		})
	});
}
exports.addBlogCatalog=function(req,res,next){
	var name=req.body.name;
	var uid=req.session.USER_ID;
	// console.log(cid);
	Blog_model.addBlogCatalog(name,uid,function(err,data){
		if(data.affectedRows>0){
			res.redirect("/blogCatalogs");
        }
    })
}

exports.blogs=function(req,res,next){
	res.render("blogs.ejs");
}
exports.blogComments=function(req,res,next){
	res.render("blogComments.ejs");
} 

