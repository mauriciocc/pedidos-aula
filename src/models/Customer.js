const orm = rootRequire('src/models/Orm.js');
const Address = require('./Address');

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

Customer.belongsToMany(Address, {through: 'customer_has_address', as: 'addresses'});

module.exports = Customer;
