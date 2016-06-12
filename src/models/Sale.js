const orm = rootRequire('src/models/Orm.js');
const Customer = require('./Customer');
const StockEntry = require('./StockEntry');

const Sale = orm.define('sale', {
  id: {
    type: orm.seq.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: orm.seq.DATE,
    allowNull: false
  }
}, {
  underscored: true
});

Sale.belongsTo(Customer, {as: 'customer', allowNull: false});
Sale.belongsToMany(StockEntry, {as: 'items', through: 'sale_has_stock_entry'});

module.exports = Sale;
