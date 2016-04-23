const orm = rootRequire('src/models/Orm.js');
const Product = require('./Product');

const StockEntry = orm.define('stock_entry', {
  id: {
    type: orm.seq.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  type: {
    type: orm.seq.ENUM('IN', 'OUT'),
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  quantity: {
    type: orm.seq.DOUBLE,
    allowNull: false
  },
  value: {
    type: orm.seq.DOUBLE,
    allowNull: false
  },
  date: {
    type: orm.seq.DATE,
    allowNull: false
  }
}, {
  underscored: true,
  instanceMethods: {
    isOut: function () {
      return this.type === 'OUT';
    }
  }
});

StockEntry.belongsTo(Product, {as: 'product'});

module.exports = StockEntry;
