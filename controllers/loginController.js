const jwt = require('jsonwebtoken');
const { config } = require('../config/index');

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
        if(person) {
            const { pers_id, pers_email, pers_name } = person;
            const access_token = jwt.sign({ sub: pers_id, pers_email, pers_name }, config.authSecret);
            return res.json({ message: 'Bienvenido', data: person, access_token });
        } else return res.status(401).json({ message: 'Credenciales incorrectas', data: {} });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Algo ha salido mal', data: [] });
    }
}

async function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        const decoded = jwt.verify(bearerToken, config.authSecret);
        if(decoded) next();
        else return res.status(403).json({ message: "Te hace falta permisos" });
    } else return res.status(403).json({ message: "Te hace falta permisos" });
}

module.exports = {
    login,
    verifyToken
}