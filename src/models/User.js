const orm = rootRequire('src/models/Orm.js');

const User = orm.define('user', {
    name: {
        type: orm.seq.STRING
    },email: {
        type: orm.seq.STRING
    },
    password: {
        type: orm.seq.STRING
    }
}, {
    freezeTableName: true
});

User.sync({force: true}).then(function () {
    User.create({
        email: 'admin@gmail.com',
        password: 'admin'
    });
});

module.exports = User;