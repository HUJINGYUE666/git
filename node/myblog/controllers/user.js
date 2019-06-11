var User_moudle = require('../models/user_models')
exports.reg = function(req,res,next){
    res.render('reg.ejs');
}

exports.do_reg = function(req,res,next){
    var name = req.body.uname;
    var pass = req.body.pass;
    console.log(name);
    console.log(pass);
    User_moudle.insert_data(name,pass,function(err,data){
        console.log(data);
    })
} 