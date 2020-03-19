const Area = require('../models/Area');

async function getAreas (req, res) {
    try {
        const { area_id } = req.params;
        if (area_id) {
            const area = await Area.findOne({ where: { area_id }});
            return res.json({message: 'returned area', data: area || {} });
        } else {
            const areas = await Area.findAll();
            return res.json({message: 'returned areas', data: areas || [] });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Algo ha salido mal', data: [] })
    }
}

async function uploadArea (req, res) {
    try {
        res.status(200).json({ message: 'Imagenes subidas', data: req.files[0] })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Algo ha salido mal', data: [] })
    }
}

module.exports = {
    getAreas,
    uploadArea
}