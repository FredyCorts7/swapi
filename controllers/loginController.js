const Person = require('../models/Person');

async function login (req, res) {
    try {
        const { pers_document, pers_password } = req.body;
        const person = await Person.findOne({
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

module.exports = {
    login
}