const Sequelize = require('sequelize');
const dbConfig = rootRequire("config/config").production;

const orm = new Sequelize(dbConfig.database || 'pedidos', dbConfig.username || 'postgres', dbConfig.password || 'postgres', {
    host: dbConfig.host || 'localhost',
    port: dbConfig.port || 5432,
    dialect: dbConfig.dialect || 'postgres',
    pool: {
        max: dbConfig.poolSize || 4,
        min: dbConfig.poolSize || 4,
        maxIdleTime: 24*60*60*1000
    }
});

module.exports = {
    seq: Sequelize,
    instance: orm,
    define: function (name, opts) {
        return orm.define(name,opts);
    }
};
