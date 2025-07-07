const { v4: uuidv4 } = require('uuid');
const userModel = require('../models/userModel');

// POST /users
const createUser = (req, res) => {
    const { name, email, phoneNumber, zipCode, dob, careCircle = [] } = req.body;

    if (!name || !email || !phoneNumber || !zipCode || !dob) {
        return res.status(400).json({ error: 'Missing information' });
    }

    const user = {
        id: id || uuidv4(),
        name,
        email,
        phoneNumber,
        zipCode,
        dob,
        careCircle,
        status: 'normal',
    };

    userModel.addUser(user);
    res.status(201).json(user);
};

// GET /users/:id
const getUsers = (req, res) => {
    res.json(userModel.getAllUsers());
};

// DELETE /user
const deleteUser = (req, res) => {
    const deletedUser = userModel.deleteUser(req.params.id);
    if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted', user: deletedUser });
};

module.exports = {
    createUser,
    getUsers,
    deleteUser
};