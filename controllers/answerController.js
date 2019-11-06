const Answer = require('../models/Answer');

async function getAnswer(req, res) {
    try {
        const { ques } = req.params;
        if(ques) {
            const answer = await Answer.findOne({ where: { question_ques_id: ques } });
            return res.json({message: 'returned answer', data: answer || [] });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Algo ha salido mal', data: [] });
    }
}

module.exports = {
    getAnswer
}