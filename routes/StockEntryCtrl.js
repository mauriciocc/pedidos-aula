'use strict';
var StockEntry = rootRequire('src/models/StockEntry');
var CrudFactory = require('./CrudFactory');
var Promise = require('bluebird');
var _ = require('lodash');

module.exports = function (router, Auth) {
  return CrudFactory(router, Auth, '/api/stock-entries', StockEntry, {
    include: [{
      all: true,
      nested: true
    }]
  });
};
