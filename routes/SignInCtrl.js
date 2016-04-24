var config = rootRequire("config/config");
var User = require('../src/models/User');
var jwt = require('jsonwebtoken');

module.exports = function (router) {

  router.post('/api/sign-in', function (req, res) {
    var sendEerror = function () {
      res.status(401).json({success: false, message: 'Authentication failed'});
    };
    User.findOne({where: {email: req.body.email}}).then((user, b, c) => {
      if (!user || user.password !== req.body.password) {
        sendEerror();
        return;
      }
      var token = jwt.sign(user.dataValues, config.app.secret, {
        expiresIn: 10800 // in seconds
      });
      res.json({success: true, token: 'JWT ' + token, user: user});
    }, (err) => {
      sendEerror();
    });
  });

};
