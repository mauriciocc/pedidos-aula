var City = rootRequire('src/models/City');
var Address = rootRequire('src/models/Address');
var CrudFactory = require('./CrudFactory');

module.exports = function (router, Auth) {
  return CrudFactory(router, Auth, '/api/addresss', Address, {include: [{ all: true }]});
};
