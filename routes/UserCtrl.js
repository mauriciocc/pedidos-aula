var User = rootRequire('src/models/User');

module.exports = function (router) {

  router.get('/api/users', function (req, res) {
    User.findAll().then(function (users) {
      res.send(users);
    })
  });

  router.post('/api/users', function (req, res) {
    User.create(req.body).then(function (user) {
      res.send(user);
    });
  });

  router.put('/api/users/:id', function (req, res) {
    User.findById(req.params.id).then(function (user) {
      if (user) {
        user.update(req.body).then(function (user) {
          res.send(user);
        });
      } else {
        res.send(404);
      }
    });
  });

  router.delete('/api/users/:id', function (req, res) {
    User.findById(req.params.id).then(function (user) {
      if (user) {
        user.destroy();
        res.send(200);
      } else {
        res.send(404);
      }
    });
  });

};
