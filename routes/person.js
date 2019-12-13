const { Router } = require('express');

const {
    getPersons,
    addPerson
} = require('../controllers/personController');

const {
    verifyToken
} = require('../controllers/loginController');

function personAPI(server) {
    const router = Router();
    server.use('/person', router);

    router.get('/', verifyToken, getPersons);
    router.post('/', addPerson);
}

module.exports = personAPI;