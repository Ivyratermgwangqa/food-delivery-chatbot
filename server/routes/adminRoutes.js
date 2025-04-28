const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// User Routes
router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUserById);
router.post('/users', adminController.addUser);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

// Meal Routes
router.get('/meals', adminController.getAllMeals);
router.get('/meals/:id', adminController.getMealById);
router.post('/meals', adminController.addMeal);
router.put('/meals/:id', adminController.updateMeal);
router.delete('/meals/:id', adminController.deleteMeal);

// Order Routes
router.get('/orders', adminController.getAllOrders);
router.get('/orders/:id', adminController.getOrderById);
router.put('/orders/:id/status', adminController.updateOrderStatus);
router.delete('/orders/:id', adminController.deleteOrder);

// System Overview Routes
router.get('/stats', adminController.getStatistics);

module.exports = router;
