const express = require('express');
const { signup, login } = require('../controllers/userController');
const router = express.Router();

// Define routes
router.post('/signup', signup);
router.post('/login', login);

module.exports = router; // Ensure this line is correct
