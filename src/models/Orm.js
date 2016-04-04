const Sequelize = require('sequelize');
const dbConfig = rootRequire("config/config").production;

const orm = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.poolSize,
        min: dbConfig.poolSize,
        maxIdleTime: 24*60*60*1000
    }
});

module.exports = {
    seq: Sequelize,
    define: function (name, opts) {
        return orm.define(name,opts);
    }
};
