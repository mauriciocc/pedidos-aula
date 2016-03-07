const orm = rootRequire('src/models/Orm.js');

const User = orm.define('user', {
    email: {
        type: orm.seq.STRING
    },
    password: {
        type: orm.seq.STRING
    }
}, {
    freezeTableName: true
});

User.sync().then(function () {
    User.create({
        email: 'admin@gmail.com',
        password: 'admin'
    });
});

module.exports = User;