const Sequelize = require('sequelize');
const sequelize = require('../lib/database');

const Question = require('../models/Question');
const Test = require('../models/Test');

const Area = sequelize.define('area', {
    area_id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    area_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    area_description: Sequelize.STRING
}, {
    tableName: 'area'
});

const objRelationShip = { foreignKey: 'area_area_id', sourceKey: 'area_id' };

Area.hasMany(Question, objRelationShip);
Question.belongsTo(Area, objRelationShip);

Area.hasMany(Test, objRelationShip);
Test.belongsTo(Area, objRelationShip);

module.exports = Area;