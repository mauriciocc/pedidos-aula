var Category = rootRequire('src/models/Category');
var CrudFactory = require('./CrudFactory');

module.exports = function (router) {
  return CrudFactory(router, '/api/categorys', Category);
};
