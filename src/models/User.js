const orm = rootRequire('src/models/Orm.js');

const User = orm.define('user', {
  id: {
    type: orm.seq.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: orm.seq.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }, email: {
    type: orm.seq.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  password: {
    type: orm.seq.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {
  underscored: true,
  freezeTableName: true,
  tableName: 'users'
});

User.sync().then(function () {
  User.findOne({email: 'admin@gmail.com'}).then(function(user) {
    if(!user) {
      User.create({
        name: 'Administrador',
        email: 'admin@gmail.com',
        password: 'admin'
      });
    }
  });
});

module.exports = User;
