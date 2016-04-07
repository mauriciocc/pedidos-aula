const orm = rootRequire('src/models/Orm.js');
const Role = require('./Role');

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
  underscored: true
});

User.belongsTo(Role, {as: 'role'});

module.exports = User;
