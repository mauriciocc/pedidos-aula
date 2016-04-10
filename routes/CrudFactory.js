module.exports = function (router, Auth, uri, DAO, opts) {

  opts = opts || {};

  router.get(uri, Auth, function (req, res) {
    DAO.findAll(opts).then(function (entities) {
      res.status(200).json(entities);
    })
  });

  router.get(uri + '/:id', Auth, function (req, res) {
    DAO.findById(req.params.id, opts).then(function (entities) {
      res.status(200).json(entities);
    })
  });

  router.post(uri, Auth, function (req, res) {
    DAO.create(req.body).then(function (entity) {
      res.status(200).json(entity);
    }, function (ex) {
      res.status(400).json(ex);
    });
  });

  router.put(uri + '/:id', Auth, function (req, res) {
    DAO.findById(req.params.id, opts).then(function (entity) {
      if (entity) {
        entity.update(req.body).then(function (entity) {
          res.status(200).json(entity);
        }, function (ex) {
          res.status(400).json(ex);
        });
      } else {
        res.sendStatus(404);
      }
    });
  });

  router.delete(uri + '/:id', Auth, function (req, res) {
    DAO.findById(req.params.id)
      .then(function (user) {
        if (user) {
          user.destroy();
          res.sendStatus(200);
        } else {
          res.sendStatus(404);
        }
      });
  });

};
