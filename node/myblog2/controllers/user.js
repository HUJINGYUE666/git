var User_model=require("../models/user_model.js");

exports.reg=function(req,res,next){
	res.render("reg.ejs");
}

exports.do_reg=function(req,res,next){
	var email=req.body.email;
	var pwd=req.body.pwd;
	User_model.sel_name_by_pass(email,pwd,function(err,data){
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

exports.login=function(req,res,next){
	res.render("login.ejs");
}

