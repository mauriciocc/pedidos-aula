const orm = rootRequire('src/models/Orm.js');
const User = require('./User');

const Auditing = orm.define('auditing', {
  id: {
    type: orm.seq.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  table_name: {
    type: orm.seq.STRING
  },
  operation: {
    type: orm.seq.ENUM('CREATE', 'UPDATE', 'DELETE')
  },
  entity_id: {
    type: orm.seq.STRING
  },
  entity_json: {
    type: orm.seq.JSON
  }
}, {
  underscored: true
});


Auditing.belongsTo(User, {as: 'user'});

module.exports = Auditing;
