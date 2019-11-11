const { Router } = require('express');

const {
    getPersons,
    addPerson
} = require('../controllers/personController');

function personAPI(server) {
    const router = Router();
    server.use('/person', router);

    router.get('/', getPersons);
    router.post('/', addPerson);    
}

module.exports = personAPI;