var express = require('express');
var router = express.Router();
require('./SignInCtrl')(router);
require('./UserCtrl')(router);

/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


module.exports = router;
