const Sequelize = require('sequelize');
const Question = require('../models/Question');
const Answer = require('../models/Answer');

async function getQuestions(req, res) {
    try {
        const { area } = req.params;
        if(area) {
            const questions = await Question.findAll({
                include: [{
                    model: Answer,
                    required: true
                }],
                where: { area_area_id: area },
                order: Sequelize.literal('rand()'),
                limit: 30
            });
            return res.json({message: 'returned questions', data: questions || [] });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Algo ha salido mal', data: [] });
    }
}

module.exports = {
    getQuestions
}