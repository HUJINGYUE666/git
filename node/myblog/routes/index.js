var express = require('express');
var router = express.Router();
var User = require('../controllers/user.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/',User.index);
router.get('/reg',User.reg);
router.post('/reg',User.do_reg);
router.get('/login',User.login);

module.exports = router;
