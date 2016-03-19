var User = rootRequire('src/models/User');

module.exports = function (router) {

  router.get('/api/users', function (req, res) {
    User.findAll().then(function (users) {
      res.send(users);
    })
  });

  router.post('/api/users', function (req, res) {
    User.create(req.body).then(function (user) {
      return res.send(user);
    });
  });

  router.delete('/api/users/:id', function (req, res) {
    User.destroy({where: {id: req.params.id}}).then(function() {
      res.send(200);
    });
  });

};
