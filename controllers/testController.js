const Test = require('../models/Test');
const Area = require('../models/Area');

async function getTests (req, res) {
    try {
        const { pers_id } = req.params;
        if (pers_id) {
            const tests = await Test.findAll({
                include: [{
                    model: Area,
                    required: true,
                    attributes: ['area_name', 'area_description'],
                }],
                attributes: ['test_calification', 'test_date', 'area_area_id'],
                where: { person_pers_id: pers_id }
            });
            return res.json({message: 'returned tests', data: tests || [] });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Algo ha salido mal', data: [] });
    }
}

async function addTest (req, res) {
    try {
        const { person_pers_id, area_area_id, test_calification, test_date } = req.body;
        const newTest = await Test.create({
            person_pers_id,
            area_area_id,
            test_calification,
            test_date
        });
        if (newTest) return res.status(201).json({ message: 'added test', data: newTest });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Algo ha salido mal', data: {} });
    }
}

module.exports = {
    getTests,
    addTest
}