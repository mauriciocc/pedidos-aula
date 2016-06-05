var Auditing = rootRequire('src/models/Auditing');
var CrudFactory = require('./CrudFactory');

module.exports = function (router, Auth) {
  return CrudFactory(router, Auth, '/api/auditings', Auditing, {
    include: [{
      all: true,
      nested: true
    }]
  });
};
