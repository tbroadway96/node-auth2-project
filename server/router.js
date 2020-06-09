const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('./models');

const router = express.Router();

router.post('/register', async (req, res) => {
    let { username, password } = req.body;

    if (!username || !password) {
        res.status(500).json({ message: 'You must provide a username and password.' });
    }

    const salt = bcrypt.genSaltSync(10);
    password = await bcrypt.hashSync(password, salt);

    const newUser = await Users.addUser({ username, password })
    if (newUser) {
        res.status(200).json(newUser);
    } else {
        res.status(500).json({ message: 'There was a problem with creating a user.' });
    }
})

router.post('/login', async (req, res) => {})

router.get('/users', async (req, res) => {})

module.exports = router;
