const orm = rootRequire('src/models/Orm.js');

const Customer = orm.define('customer', {
    name: {
        type: orm.seq.STRING
    }
}, {
    freezeTableName: true
});

Customer.sync({force: true});

module.exports = Customer;