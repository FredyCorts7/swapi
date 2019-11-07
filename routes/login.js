const { Router } = require('express');

const {
    login
} = require('../controllers/loginController');

function loginAPI(server) {
    const router = Router();
    server.use('/login', router);

    router.post('/', login);
}

module.exports = loginAPI;