const orm = rootRequire('src/models/Orm.js');
const Address = require('./Address');
const City = require('./City');

const Customer = orm.define('customer', {
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

Customer.belongsToMany(Address, {through: 'customer_has_address'});

module.exports = Customer;
