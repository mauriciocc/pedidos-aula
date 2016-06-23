const orm = rootRequire('src/models/Orm.js');
const Customer = require('./Customer');
const StockEntry = require('./StockEntry');
const _ = require("lodash");
const errors = require("sequelize/lib/errors");
const Queue = require('promise-queue');
const Promise = require('bluebird');
var moment = require("moment");

Queue.configure(Promise);

const processQueue = new Queue(1, Math.pow(2, 16));

const Sale = orm.define('sale', {
  id: {
    type: orm.seq.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: orm.seq.DATEONLY,
    allowNull: false
  },
  paid: {
    type: orm.seq.ENUM('Y', 'N'),
    allowNull: true
  }
}, {
  underscored: true
});

Sale.belongsTo(Customer, {as: 'customer', allowNull: false});
Sale.belongsToMany(StockEntry, {as: 'items', through: 'sale_has_stock_entry'});

Sale.addHook('beforeCreate', 'checkItemAvailability', (sale, options) => {
  return processQueue.add(() => {
    try {
      var itemIds = sale.items.map(i => i.productId)
        .filter((value, index, self) => self.indexOf(value) === index);

      return orm.instance.query(query, {
        replacements: {products: itemIds, inDate: sale.date.substring(0, 10)},
        type: orm.seq.QueryTypes.SELECT
      }).then(result => {
        var procErrors = [];

        sale.items.forEach(item => {
          var stock = _.find(result, {productId: item.productId});
          if (!stock) {
            procErrors.push({productId: item.productId, total: item.quantity});
          } else {
            stock.total -= item.quantity;
          }
        });

        result.forEach(stock => {
          if (stock.total < 0) {
            procErrors.push({productId: stock.productId, total: stock.total});
          }
        });

        if (procErrors.length > 0) {
          throw new errors.ValidationError('No Stock Available of products', procErrors);
        }
      });
    } catch (e) {
      console.error(e);
      throw new errors.ValidationError('Error running checkItemAvailability hook');
    }
  });
});

Sale.addHook('afterDestroy', 'removeOrphanStockEntries', (sale, options) => {
  return orm.instance.query(`delete from stock_entries where type = 'OUT' and id not in (select distinct "stockEntryId" from sale_has_stock_entry)`);
});

module.exports = Sale;


const query = `SELECT
  e."productId",
  sum(quantity) - (SELECT case when sum(quantity) is null then 0 else sum(quantity) end
                   FROM stock_entries
                   WHERE "productId" = e."productId" AND type = 'OUT' AND "date"::date <= :inDate) AS total
FROM stock_entries e
WHERE
  "productId" IN (:products)
  AND e.type = 'IN'
  AND e.date::date <= :inDate
GROUP BY 1`;
