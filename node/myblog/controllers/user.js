//var async=require("async");
var User_model=require("../models/user_model.js");

exports.yy=function(req,res,next){
	var name=req.params.username;
	console.log(name);
}

exports.zz=function(req,res,next){
	var qur=req.query.q;
	console.log(qur);
}

exports.checkajax=function(req,res,next){
	var name=req.body.value;
	//res.send("success");
	User_model.checkName(name,function(err,data){
		if(data.length>0){
			res.send("success");
		}else{
			res.send("error");
		}
	});
}

exports.unlogin=function(req,res,next){
	req.session=null;
	res.redirect("/");
}

exports.do_login=function(req,res,next){
	var name=req.body.uname;
	var pass=req.body.pass;

	User_model.sel_name_by_pass(name,pass,function(err,data){
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

exports.reg=function(req,res,next){
	res.render("reg.ejs");
}

exports.do_reg=function(req,res,next){
	var name=req.body.uname;
	var pass=req.body.pass;

	console.log(name);
	console.log(pass);

	//验证用户名是否重名
	/*
	var asyncFunc=function(name){
		return new Promise(function(resolve,reject){
			User_model.checkName(name,function(err,data){
				resolve(data);
			})
		})
	}

	async function asyncFuncNew(name,pass){
		var data=await asyncFunc(name);
		if(data.length>0){
			res.redirect("/reg");
		}else{
			
			User_model.insert_data(name,pass,function(err,data){
	        		if(data.affectedRows>0){
					res.redirect('/login');
				}
        	});
		}
	};
	asyncFuncNew(name,pass);*/

	//async waterfall解决回调地狱问题
	/*
	async.waterfall([
		function(callback){
			User_model.checkName(name,function(err,data){
				callback(null,data);
			});
		},
	    function(data, callback) {
	        // arg1 now equals 'one' and arg2 now equals 'two'
	        //callback(null, 'three');
	        if(data.length>0){
	        	res.redirect("/reg");
	        }else{
	        	User_model.insert_data(name,pass,function(err,data){
					//console.log(data);
					if(data.affectedRows>0){
						res.redirect("/login");
					}
				});
	        }
	    },
	    
	], function (err, result) {
	    // result now equals 'done'
	    console.log(result);
	});*/


	
	User_model.checkName(name,function(err,data){
		//console.log(data);
		if(data.length>0){
			//res.send("用户名重名");
			res.redirect("/reg");
		}else{
			User_model.insert_data(name,pass,function(err,data){
				//console.log(data);
				if(data.affectedRows>0){
					res.redirect("/login");
				}
			});
		}
	})
}