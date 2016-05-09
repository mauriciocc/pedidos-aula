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

module.exports = function () {
  Orm.instance.sync({force: true}).then(() => {
    var functionAuditing = "CREATE OR REPLACE FUNCTION auditing() "+
	"RETURNS TRIGGER "+
	"AS $$ BEGIN "+
        "       INSERT INTO auditings (\"table\", \"id_refer\", \"values\", \"date\", \"createdAt\", \"updatedAt\") VALUES(TG_RELNAME, OLD.id, to_json(OLD), now(), now(), now());"+
        "       IF TG_OP = 'UPDATE' THEN"+
        "           RETURN NEW;"+
        "       ELSE"+
        "           RETURN OLD;"+
	"   	END IF;"+
	"END;$$ LANGUAGE plpgsql;";
    Orm.instance.query(functionAuditing);
    var triggersAuditing = ""+
    "CREATE TRIGGER triggerAuditingAddresses BEFORE DELETE OR UPDATE ON addresses FOR EACH ROW EXECUTE PROCEDURE auditing();"+
    "CREATE TRIGGER triggerAuditingCategories BEFORE DELETE OR UPDATE ON categories FOR EACH ROW EXECUTE PROCEDURE auditing();"+
    "CREATE TRIGGER triggerAuditingCities BEFORE DELETE OR UPDATE ON cities FOR EACH ROW EXECUTE PROCEDURE auditing();"+
    "CREATE TRIGGER triggerAuditingCustomers BEFORE DELETE OR UPDATE ON customers FOR EACH ROW EXECUTE PROCEDURE auditing();"+
    "CREATE TRIGGER triggerAuditingProducts BEFORE DELETE OR UPDATE ON products FOR EACH ROW EXECUTE PROCEDURE auditing();"+
    "CREATE TRIGGER triggerAuditingRoles BEFORE DELETE OR UPDATE ON roles FOR EACH ROW EXECUTE PROCEDURE auditing();"+
    "CREATE TRIGGER triggerAuditingStock_entries BEFORE DELETE OR UPDATE ON stock_entries FOR EACH ROW EXECUTE PROCEDURE auditing();"+
    "CREATE TRIGGER triggerAuditingUsers BEFORE DELETE OR UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE auditing();";
    Orm.instance.query(triggersAuditing);

    Role.findOrCreate({defaults: {name: "Administrador"}, where: {name: "Administrador"}}).spread((instance, created) => {
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
    ).then(City.findOrCreate({defaults: {name: "Torres", state: "RS"}, where: {name: "Torres"}}).spread((instance, created) => {
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


