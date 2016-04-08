var Product = rootRequire('src/models/Product');
var CrudFactory = require('./CrudFactory');

module.exports = function (router) {
  return CrudFactory(router, '/api/products', Product);
};
