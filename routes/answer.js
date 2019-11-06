const { Router } = require('express');

const {
    getAnswer
} = require('../controllers/answerController');

function answerAPI(server) {
    const router = Router();
    server.use('/answer', router);

    router.get('/:ques', getAnswer);
}

module.exports = answerAPI;