const Sequelize = require('sequelize');
const sequelize = require('../lib/database');

const Test = require('../models/Test');

const Person = sequelize.define('person', {
    pers_id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    pers_document: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    pers_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pers_lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pers_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pers_password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pers_birthday: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    tableName: 'person'
});

const objRelationShip = { foreignKey: 'person_pers_id', sourceKey: 'pers_id' };

Person.hasMany(Test, objRelationShip);
Test.belongsTo(Person, objRelationShip);

module.exports = Person;