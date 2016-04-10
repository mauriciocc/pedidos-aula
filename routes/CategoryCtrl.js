var Category = rootRequire('src/models/Category');
var CrudFactory = require('./CrudFactory');

module.exports = function (router, Auth) {
  return CrudFactory(router, Auth, '/api/categorys', Category);
};
