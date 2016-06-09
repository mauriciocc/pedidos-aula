'use strict';
var City = rootRequire('src/models/City');
var Address = rootRequire('src/models/Address');
var Customer = rootRequire('src/models/Customer');
var CrudFactory = require('./CrudFactory');
var Promise = require('bluebird');
var _ = require('lodash');

var updateCallback = (entity, fromReq) => {
  return new Promise((resolve) => {
    entity.setAddresses(entity.addresses.filter(ad => _.find(fromReq.addresses, {id: ad.id}))).then(() => {
      var updates = fromReq.addresses.map(ad => ad.id ? Address.update(ad, {where: {id: ad.id}}) : entity.createAddress(ad));
      Promise.all(updates).then(() => entity.reload().then(() => resolve(entity)));
    });

  });
};

module.exports = function (router, Auth) {
  return CrudFactory(router, Auth, '/api/customers', Customer, {
    include: [{
      all: true,
      nested: true
    }]
  }, updateCallback);
};
