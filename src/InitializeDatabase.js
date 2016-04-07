const Orm = require('./models/Orm');
const Role = require('./models/Role');
const User = require('./models/User');

module.exports = function () {
  Orm.instance.sync({force: true}).then(() => {
    Role.findOrCreate({defaults: {name: "Admin"}, where: {name: "Admin"}}).spread((instance, created) => {
      Role.Admin = instance;

      User.findOrCreate({
        defaults: {
          name: 'Administrador',
          email: 'admin@gmail.com',
          password: 'admin',
          roleId: instance.id
        },
        where: {
          email: 'admin@gmail.com'
        }
      });
    }).then(() => Role.findOrCreate({defaults: {name: "User"}, where: {name: "User"}}).spread(User => {
      Role.User = User;
    }));
  });
};


