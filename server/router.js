const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('./models');
const jwt = require('jsonwebtoken');
const restrictions = require('./auth/restrictions');

const router = express.Router();

// CREATE A USER
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

// LOGIN
router.post('/login', async (req, res) => {})

// GET USERS
router.get('/users', restrictions, async (req, res) => {
    try {const usersList = await Users.find();

        if (usersList) {
            res.status(200).json(usersList);
        } else {
            res.status(500).json({ message: 'Could not retrieve the users list.' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
})

module.exports = router;
