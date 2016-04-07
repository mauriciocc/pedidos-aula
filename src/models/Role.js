const orm = rootRequire('src/models/Orm.js');

const Role = orm.define('role', {
  id: {
    type: orm.seq.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: orm.seq.STRING
  }
}, {
  underscored: true
});

module.exports = Role;
