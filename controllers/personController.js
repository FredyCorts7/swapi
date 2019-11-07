const Person = require('../models/Person');

async function login (req, res) {
    try {
        const { pers_document, pers_password } = req.body;
        const person = Person.findOne({
            where: {
                pers_document,
                pers_password
            }
        })
        if(person) return res.json({ message: 'Bienvenido', data: person });
        else return res.status(401).json({ message: 'Credenciales incorrectas', data: {} });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Algo ha salido mal', data: [] });
    }
}

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
        return res.status(500).json({ message: 'Algo ha salido mal', data: [] });
    }
}

async function addPerson (req, res) {
    try {
        const { pers_document, pers_name, pers_lastname, pers_email, pers_password, pers_birthday } = req.body;
        const newPerson = await Person.create({
            pers_document,
            pers_name,
            pers_lastname,
            pers_email,
            pers_password,
            pers_birthday
        });
        if (newPerson) return res.status(201).json({ message: 'added person', data: newPerson });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Algo ha salido mal', data: {} });
    }
}

module.exports = {
    getPersons,
    addPerson,
    login
}