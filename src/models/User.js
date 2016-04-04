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
  freezeTableName: true
});

User.sync({force: true}).then(function () {
  User.create({
    name: 'Administrador',
    email: 'admin@gmail.com',
    password: 'admin'
  });
});

module.exports = User;
