var express = require('express');
var router = express.Router();
var User=require("../controllers/user.js");
var Blog=require("../controllers/blog.js");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',User.exit);

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);
router.post('/checkname',User.checkajax);

router.get('/login',User.login);
router.post('/login',User.do_login);

router.get('/index',Blog.blog);
router.get('/newblog',Blog.newblog);

module.exports = router;
