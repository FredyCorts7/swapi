const Sequelize = require('sequelize');
const sequelize = require('../lib/database');

const Test = sequelize.define('test', {
    test_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    test_calification: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    test_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    person_pers_id: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    area_area_id: {
        type: Sequelize.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'test'
});

module.exports = Test;