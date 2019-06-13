var Blog_model=require("../models/blog_model.js");

exports.index=function(req,res,next){
	//res.send("以登录的主页")
	res.render("index.ejs",{title:"mt"});
	// Blog_model.sel_all(function(err,data){
	// 	//console.log(data);
		
	// 	res.render("index.ejs",{
	// 		"title":"laoshan",
	// 		"sess":req.session,
	// 		"posts":data,
	// 	});
	// });
}