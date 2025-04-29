// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware'); // Import the protect middleware

// Import the controller functions
const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  getAllMeals,
  getMealById,
  addMeal,
  updateMeal,
  deleteMeal,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
  getStatistics
} = require('../controllers/adminController');

// Public routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', addUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Meal routes
router.get('/meals', getAllMeals);
router.get('/meals/:id', getMealById);
router.post('/meals', addMeal);
router.put('/meals/:id', updateMeal);
router.delete('/meals/:id', deleteMeal);

// Order routes
router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrderById);
router.put('/orders/:id', updateOrderStatus);
router.delete('/orders/:id', deleteOrder);

// System statistics route
router.get('/statistics', getStatistics);

module.exports = router;
