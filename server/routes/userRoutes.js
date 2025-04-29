// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register a new user
router.post('/register', userController.registerUser);

// Login a user
router.post('/login', userController.loginUser);

// Get user profile
router.get('/profile', userController.getUserProfile);

// Update user details
router.put('/update', userController.updateUserProfile);

// Get all users (Admin route)
router.get('/all', userController.getAllUsers);

module.exports = router;
