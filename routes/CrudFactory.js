'use strict';
var Promise = require('bluebird');

var cloneObj = function(original, extend) {
  var clone = JSON.parse(JSON.stringify(original));
  for(var prop in extend) {
    clone[prop] = extend[prop];
  }
  return clone;
};

module.exports = function (router, Auth, uri, DAO, opts, updateCallback) {

  opts = opts || {};
  updateCallback = updateCallback || function (entity) {
      return Promise.resolve(entity)
    };

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
    DAO.create(req.body, cloneObj(opts, {user: req.user})).then(function (entity) {
      res.status(200).json(entity);
    }, function (ex) {
      res.status(400).json(ex);
    });
  });

  router.put(uri + '/:id', Auth, function (req, res) {
    DAO.findById(req.params.id, opts).then(function (entity) {
      if (entity) {
        entity.update(req.body, cloneObj(opts, {user: req.user})).then(function (entity) {
          updateCallback(entity, req.body).then(updated => {
            res.status(200).json(updated);
          });
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
          user.destroy(cloneObj(opts, {user: req.user}));
          res.sendStatus(200);
        } else {
          res.sendStatus(404);
        }
      });
  });

};
