var User = rootRequire('src/models/User');
var CrudFactory = require('./CrudFactory');

module.exports = function (router) {
  return CrudFactory(router, '/api/users', User);
};
