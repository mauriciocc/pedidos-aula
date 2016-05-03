const orm = rootRequire('src/models/Orm.js');
const City = require('./City');

const Address = orm.define('address', {
  id: {
    type: orm.seq.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  district: {
  	type: orm.seq.STRING
  },
  address: {
    type: orm.seq.STRING
  },
  number: {
    type: orm.seq.STRING
  },
  complement: {
    type: orm.seq.STRING
  }
}, {
  underscored: true,
  name: {
    singular: 'address',
    plural: 'addresses'
  }
});

Address.belongsTo(City, {as: 'city'});

module.exports = Address;
