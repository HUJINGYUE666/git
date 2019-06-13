var User_model = require('../models/user_model');
var async = require('async');

exports.index = function(req,res,next){
    res.render('index.ejs',{title:'Express'});
}

exports.checkajax = function(req,res,next){
    var name=req.body.value;
    User_model.checkName(name,function(err,data){
		if(data.length>0){
			res.send("success");
		}else{
			res.send("error");
		}
	});
}

exports.reg = function(req,res,next){
    res.render('reg.ejs');
}

exports.do_reg = function(req,res,next){
    var name = req.body.uname;
    var pass = req.body.pass;
    // console.log(name);
    // console.log(pass);
    //连接数据库 数据库引擎 匹配账号密码
    //npm install mysql --save
    //验证用户名是否重名
    //async waterfall 解决回调地狱 
    // async.waterfall([
	// 	function(callback){
	// 		User_model.checkName(name,function(err,data){
	// 			callback(null,data);
	// 		});
	// 	},
	//     function(data, callback) {
	//         // arg1 now equals 'one' and arg2 now equals 'two'
	//         //callback(null, 'three');
	//         if(data.length>0){
	//         	res.redirect("/reg");
	//         }else{
	//         	User_model.insert_data(name,pass,function(err,data){
	// 				//console.log(data);
	// 				if(data.affectedRows>0){
	// 					res.redirect("/login");
	// 				}
	// 			});
	//         }
	//     },
	// ], function (err, result) {
	//     // result now equals 'done'
    //     console.log(result);
    // });
    //回调地狱
    User_model.checkName(name,function(err,data){
        console.log(data);
        if(data.length > 0){
            // res.send('用户名已存在')
            res.redirect('/reg')
        }else{
            User_model.insert_data(name,pass,function(err,data){
                // console.log(data);
                if(data.affectedRows>0){
                    res.redirect('/login');
                }
            })
        }
    })
    
} 
exports.login = function(req,res,next){
    res.render('login.ejs');
}

exports.do_login = function(req,res,next){
    var name = req.body.uname;
    var pass = req.body.pass;
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
