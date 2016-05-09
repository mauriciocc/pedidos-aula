var Role = rootRequire('src/models/Role');
var CrudFactory = require('./CrudFactory');

module.exports = function (router, Auth) {
  return CrudFactory(router, Auth, '/api/roles', Role);
};
