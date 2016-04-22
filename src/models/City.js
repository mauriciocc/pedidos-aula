const orm = rootRequire('src/models/Orm.js');

const City = orm.define('city', {
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

module.exports = City;
