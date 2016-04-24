const orm = rootRequire('src/models/Orm.js');

const Auditing = orm.define('auditing', {
  id: {
    type: orm.seq.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  table: {
  	type: orm.seq.STRING
  },
  id_refer: {
    type: orm.seq.STRING
  },
  values: {
    type: orm.seq.JSON
  },
  date: {
    type: orm.seq.DATE
  },
  user_id: {
    type: orm.seq.INTEGER
  }
}, {
  underscored: true
});

module.exports = Auditing;
