const Person = require('../models/Person');

async function getPersons (req, res) {
    try {
        const { pers_id } = req.params;
        if (pers_id) {
            const person = await Person.findOne({ where: { pers_id }});
            return res.json({message: 'returned person', data: person || {} });
        } else {
            const persons = await Person.findAll();
            return res.json({message: 'returned persons', data: persons || [] });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Algo ha salido mal', data: [] });
    }
}

async function addPerson (req, res) {
    try {
        const { pers_document, pers_name, pers_lastname, pers_email, pers_birthday } = req.body;
        const newPerson = await Person.create({
            pers_document,
            pers_name,
            pers_lastname,
            pers_email,
            pers_birthday
        });
        if (newPerson) res.status(201).json({ message: 'added person', data: newPerson });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Algo ha salido mal', data: {} });
    }
}

module.exports = {
    getPersons,
    addPerson,
}