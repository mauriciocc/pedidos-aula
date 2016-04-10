var passport = require('passport');

module.exports = function (router, Auth) {

  router.get('/api/sign-in', Auth, function (req, res) {
    res.json(req.user);
  });

};
