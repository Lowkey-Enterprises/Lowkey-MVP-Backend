const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// create new user
router.post('/', userController.createUser);

// get all users
router.get('/', userController.getUsers);

module.exports = router;