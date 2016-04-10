var Category = rootRequire('src/models/Category');
var Product = rootRequire('src/models/Product');
var CrudFactory = require('./CrudFactory');

module.exports = function (router, Auth) {
  return CrudFactory(router, Auth, '/api/products', Product, {include: [{model: Category, as: 'category'}]});
};
