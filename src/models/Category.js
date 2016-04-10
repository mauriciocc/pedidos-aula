const orm = rootRequire('src/models/Orm.js');

const Category = orm.define('category', {
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

module.exports = Category;
