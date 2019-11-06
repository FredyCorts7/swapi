const Sequelize = require('sequelize');
const sequelize = require('../lib/database');

const Answer = require('../models/Answer');

const Question = sequelize.define('question', {
    ques_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    ques_content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ques_description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    area_area_id: {
        type: Sequelize.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'question'
});

const objRelationShip = { foreignKey: 'question_ques_id', sourceKey: 'ques_id' };

Question.hasOne(Answer, objRelationShip);
Answer.belongsTo(Question, objRelationShip);

module.exports = Question;