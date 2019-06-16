var User_model=require("../models/user_model.js");

exports.reg=function(req,res,next){
	res.render("reg.ejs");
}

exports.do_reg=function(req,res,next){
	var email=req.body.email;
	console.log(email);
	User_model.checkName(email,function(err,data){
		//console.log(data);
		if(data.length>0){
			// res.send("用户名已存在");
			res.redirect("/reg");
		}else{
			User_model.insert_data(email,pwd,function(err,data){
				//console.log(data);
				if(data.affectedRows>0){
					res.redirect("/login");
				}
			});
		}
	})
}

exports.checkajax=function(req,res,next){
	var email=req.body.value;
	//res.send("success");
	User_model.checkName(email,function(err,data){
		if(data.length>0){
			res.send("success");
		}else{
			res.send("error");
		}
	});
}

exports.login=function(req,res,next){
	res.render("login.ejs");
}

exports.do_login=function(req,res,next){
	var email=req.body.email;
	var pwd=req.body.pwd;
	console.log(email);
	User_model.sel_email_by_pwd(email,pwd,function(err,data){
		//console.log(data);
		if(data.length>0){
			//console.log("lognin success");
			req.session=data[0];
			res.redirect('/');
		}else{
			res.redirect("/login");
		}
	});
}

exports.blog=function(req,res,next){
	res.render("newBlog.ejs");
}

