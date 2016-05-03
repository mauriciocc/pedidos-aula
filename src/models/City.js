const orm = rootRequire('src/models/Orm.js');

const City = orm.define('city', {
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
  },
  state: {
    type: orm.seq.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {
  underscored: true,
  name: {
    singular: 'city',
    plural: 'cities'
  }
});

module.exports = City;
