const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');  // Make sure this path is correct

// Define routes with proper controller functions
router.post('/order', orderController.placeOrder);  // Ensure this is a function
router.get('/order/:orderId/:deliveryService', orderController.trackOrder);  // Ensure this is a function
router.get('/meals', orderController.getMeals);  // Ensure this is a function

module.exports = router;
