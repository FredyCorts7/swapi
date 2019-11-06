const Sequelize = require('sequelize');
const sequelize = require('../lib/database');

const Answer = sequelize.define('answer', {
    answ_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    answ_a: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answ_b: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answ_c: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answ_d: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answ_key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_ques_id: {
        type: Sequelize.BIGINT,
        unique: true,
        allowNull: false
    }
}, {
    tableName: 'answer'
});

module.exports = Answer;