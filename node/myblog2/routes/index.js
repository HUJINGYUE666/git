var express = require('express');
var router = express.Router();
var User=require("../controllers/user.js");
var Blog=require("../controllers/blog.js");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',User.exit); //首页

router.get('/reg',User.reg); //注册
router.post('/reg',User.do_reg);
router.post('/checkname',User.checkajax);

router.get('/login',User.login); //登录
router.post('/login',User.do_login);

router.get('/index_logined',Blog.index_logined); //博客
router.get('/newblog',Blog.newblog); //发表博客

router.get('/inbox',Blog.inbox); //编辑个人资料
router.get('/profile',Blog.profile); //编辑个人资料
router.get('/chpwd',Blog.chpwd); //编辑个人资料
router.get('/userSettings',Blog.userSettings); //编辑个人资料

module.exports = router;
