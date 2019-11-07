const { Router } = require('express');

const {
    getTests,
    addTest
} = require('../controllers/testController');

function testAPI(server) {
    const router = Router();
    server.use('/test', router);

    router.get('/:pers_id', getTests);
    router.post('/', addTest);
}

module.exports = testAPI;