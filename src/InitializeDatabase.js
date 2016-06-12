const Orm = require('./models/Orm');
const Role = require('./models/Role');
const User = require('./models/User');
const Category = require('./models/Category');
const Product = require('./models/Product');
const StockEntry = require('./models/StockEntry');
const Customer = require('./models/Customer');
const Address = require('./models/Address');
const City = require('./models/City');
const Auditing = require('./models/Auditing');
const Sale = require('./models/Sale');

module.exports = function () {
  Orm.instance.sync({force: true}).then(() => {

    var registerAudit = function (operation, instance, opts) {
      var tableName = instance.Model.getTableName();
      if (tableName === 'auditings') return;
      Auditing.create({
        table_name: tableName,
        operation: operation,
        userId: opts && opts.user ? opts.user.id : null,
        entity_id: instance.id,
        entity_json: instance
      });
    };

    Orm.instance.addHook('afterCreate', (instance, opts) => {
      registerAudit("CREATE", instance, opts);
    });
    Orm.instance.addHook('afterUpdate', (instance, opts) => {
      registerAudit("UPDATE", instance, opts);
    });
    Orm.instance.addHook('afterDestroy', (instance, opts) => {
      registerAudit("DELETE", instance, opts);
    });

    Role.findOrCreate({
      defaults: {name: "Administrador"},
      where: {name: "Administrador"}
    }).spread((instance, created) => {
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
      User.findOrCreate({
        defaults: {
          name: 'Novo Adm',
          email: 'admin2@gmail.com',
          password: 'admin',
          roleId: instance.id
        },
        where: {
          email: 'admin2@gmail.com'
        }
      });
    }).then(() => Role.findOrCreate({defaults: {name: "Usuário"}, where: {name: "Usuário"}}).spread(User => {
      Role.User = User;
    })).then(Category.findOrCreate({
        defaults: {name: "Pasteis"},
        where: {name: "Pasteis"}
      }).spread((instance, created) => {
        Category.Pasteis = instance;

        Product.findOrCreate({
          defaults: {
            name: 'Pastel de Carne',
            value: 12.90,
            img: 'http://orsimages.unileversolutions.com/ORS_Images/Knorr_pt-BR/knorr_pastel_de_carne_580x326_35_1.1.35_326X580.Jpeg',
            categoryId: instance.id
          },
          where: {
            name: 'Pastel de Carne'
          }
        });
      })
    ).then(City.findOrCreate({
        defaults: {name: "Torres", state: "RS"},
        where: {name: "Torres"}
      }).spread((instance, created) => {
        City.Torres = instance;

        Address.findOrCreate({
          defaults: {
            district: 'Centro',
            address: 'Rua Leonardo Truda',
            number: '333',
            complement: '',
            cityId: instance.id
          },
          where: {
            address: 'Rua Leonardo Truda'
          }
        }).spread((instanceA, created) => {
          Customer.findOrCreate({
            defaults: {
              name: 'Cliente Teste',
              Address: [
                instanceA
              ]
            },
            where: {
              name: 'Cliente Teste'
            }
          }).spread(customer => customer.addAddress(instanceA));
        });
      })
    );
  });
};


