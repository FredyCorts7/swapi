const { Router } = require('express');

const {
    login
} = require('../controllers/personController');

function loginAPI(server) {
    const router = Router();
    server.use('/login', router);

    router.post('/', login);
}

module.exports = loginAPI;