const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// create new user
router.post('/', userController.createUser);

// get all users
router.get('/', userController.getUsers);

// delete user
router.delete('/:id', userController.deleteUser);

// TODO update status
// TODO update care circle

module.exports = router;