var User = rootRequire('src/models/User');

module.exports = function (router) {

    router.get('/api/users', function(req, res) {
      User.findAll().then(function (users) {
        res.send(users);
      })
    });

};
