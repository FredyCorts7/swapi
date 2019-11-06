const { Router } = require('express');

const {
    getAreas
} = require('../controllers/areaController');

function areaAPI(server) {
    const router = Router();
    server.use('/area', router);

    router.get('/', getAreas);
    router.get('/:area_id', getAreas);
}

module.exports = areaAPI;