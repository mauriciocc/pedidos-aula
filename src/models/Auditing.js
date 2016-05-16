const orm = rootRequire('src/models/Orm.js');

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
  },
  user_id: {
    type: orm.seq.INTEGER
  }
}, {
  underscored: true
});

module.exports = Auditing;
