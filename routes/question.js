const { Router } = require('express');

const {
    getQuestions
} = require('../controllers/questionController');

function questionAPI(server) {
    const router = Router();
    server.use('/question', router);

    router.get('/:area', getQuestions);
}

module.exports = questionAPI;