var db=require("./db.js");

exports.insert_data=function(name,pass,callback){
	var sql="insert into user(uname,pass) values(?,?)";
	db.query(sql,[name,pass],callback);
}

exports.sel_name_by_pass=function(name,pass,callback){
	var sql="select * from user where uname=? and pass=?";
	db.query(sql,[name,pass],callback);
}
// 重复组件
// var mysql = require('mysql');
// var pool  = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'root',
//   password        : '',
//   database        : 'newblog'
// });

// exports.insert_data=function(name,pass,callback){
// 	pool.getConnection(function(err, connection) {
// 	  if (err) throw err; 
// 	  var sql="insert into user(uname,pass) values(?,?)";
// 	  connection.query(sql,[name,pass],function (error, results, fields) {
// 	    connection.release();
// 	    if (error) throw error;
// 	    callback(error,results);
// 	  });
// 	});
// }

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'newblog'
// });
 
// 报错
// exports.insert_data = function(name,pass,callback){
//     connection.connect();
//     var sql = 'insert into user(uid,uname,pass) values(null,"'+name+'","'+pass+'")';
//     console.log(sql);
//     connection.query(sql, function (error, results, fields) {
//         if (error) throw error;
//         // console.log('The solution is: ', results[0].solution);
//         // console.log(results);
//         callback(error, results);
//         connection.end();
//     });  
// }
