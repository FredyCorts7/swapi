const Sequelize = require('sequelize');
const { config } = require('../config/index');

const sequelize = new Sequelize(
    config.dbName, config.dbUser, config.dbPass,
    {
        host: config.dbHost,
        dialect: 'mysql',
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

module.exports = sequelize;