const { v4: uuidv4 } = require('uuid');
const userModel = require('../models/userModel');

// POST /users
const createUser = (req, res) => {
    const { name, email, careCircle = [] } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Missing name or email' });
    }

    const user = {
        id: uuidv4(),
        name,
        email,
        careCircle,
        status: 'norma',
    };

    userModel.addUser(user);
    res.status(201).json(user);
};

// GET /users
const getUsers = (req, res) => {
    res.json(userModel.getAllUsers());
};

module.exports = {
    createUser,
    getUsers
};