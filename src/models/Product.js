const orm = rootRequire('src/models/Orm.js');
const Category = require('./Category');

const Product = orm.define('product', {
  id: {
    type: orm.seq.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: orm.seq.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }, value: {
    type: orm.seq.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  img: {
    type: orm.seq.STRING,
    allowNull: true
  }
}, {
  underscored: true
});

Product.belongsTo(Category, {as: 'category'});

module.exports = Product;
