const Sequelize = require('sequelize');
const dbConfig = rootRequire("config").db;

const orm = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'postgres',
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