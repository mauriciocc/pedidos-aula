var City = rootRequire('src/models/City');
var Address = rootRequire('src/models/Address');
var Customer = rootRequire('src/models/Customer');
var CrudFactory = require('./CrudFactory');

module.exports = function (router, Auth) {
  return CrudFactory(router, Auth, '/api/customers', Customer, { include: [{ all: true }]});
};
