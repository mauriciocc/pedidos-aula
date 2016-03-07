const orm = rootRequire('src/models/Orm.js');

const Role = orm.define('role', {
    name: {
        type: orm.seq.STRING
    }
}, {
    freezeTableName: true
});

Role.sync({force: true}).then(function () {
    Role.create({
        name: "ADMIN"
    });
    Role.create({
        name: "USER"
    });
});

module.exports = Role;