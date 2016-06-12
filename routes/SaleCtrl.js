'use strict';
var Sale = rootRequire('src/models/Sale');
var CrudFactory = require('./CrudFactory');
var Promise = require('bluebird');
var _ = require('lodash');

module.exports = function (router, Auth) {
  return CrudFactory(router, Auth, '/api/sales', Sale, {
    include: [{
      all: true,
      nested: true
    }]
  });
};
