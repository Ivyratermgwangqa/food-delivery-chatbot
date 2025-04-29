const uberEatsService = require('../services/uberEatsService');
const mrDService = require('../services/mrDService');
const User = require('../models/User');  // Assuming User model exists for user data
const Meal = require('../models/Meal');  // Assuming Meal model exists for meal data

// Function to place an order
exports.placeOrder = async (req, res) => {
  try {
    const { userId, mealId, deliveryAddress, deliveryService } = req.body;

    // Validate that all required fields are provided
    if (!userId || !mealId || !deliveryAddress || !deliveryService) {
      return res.status(400).json({ message: 'All fields (userId, mealId, deliveryAddress, deliveryService) are required' });
    }

    // Get user and meal details from your database
    const user = await User.findById(userId);
    const meal = await Meal.findById(mealId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }

    // Construct the order details
    const orderDetails = {
      userId,
      mealId,
      mealName: meal.name,
      deliveryAddress,
      totalPrice: meal.price,
    };

    let orderConfirmation;

    // Handle placing the order with the selected delivery service
    if (deliveryService === 'uberEats') {
      orderConfirmation = await uberEatsService.placeOrder(orderDetails);
    } else if (deliveryService === 'mrD') {
      orderConfirmation = await mrDService.placeOrder(orderDetails);
    } else {
      return res.status(400).json({ message: 'Invalid delivery service selected' });
    }

    // Return the order confirmation
    res.status(201).json({ orderConfirmation });
  } catch (err) {
    console.error('Error placing order:', err);
    res.status(500).json({ message: 'Error placing order', error: err.message });
  }
};

// Function to track an order
exports.trackOrder = async (req, res) => {
  try {
    const { orderId, deliveryService } = req.params;

    // Validate that both parameters are provided
    if (!orderId || !deliveryService) {
      return res.status(400).json({ message: 'Both orderId and deliveryService are required' });
    }

    let orderStatus;

    // Handle tracking the order based on the selected delivery service
    if (deliveryService === 'uberEats') {
      orderStatus = await uberEatsService.trackOrder(orderId);
    } else if (deliveryService === 'mrD') {
      orderStatus = await mrDService.trackOrder(orderId);
    } else {
      return res.status(400).json({ message: 'Invalid delivery service selected' });
    }

    // Return the order status
    res.status(200).json({ orderStatus });
  } catch (err) {
    console.error('Error tracking order:', err);
    res.status(500).json({ message: 'Error tracking order', error: err.message });
  }
};

// Function to get available meals
exports.getMeals = async (req, res) => {
  try {
    const { deliveryService } = req.query;

    // Validate that the deliveryService parameter is provided
    if (!deliveryService) {
      return res.status(400).json({ message: 'deliveryService is required' });
    }

    let meals;

    // Get meals from the selected delivery service
    if (deliveryService === 'uberEats') {
      meals = await uberEatsService.getMeals();
    } else if (deliveryService === 'mrD') {
      meals = await mrDService.getMeals();
    } else {
      return res.status(400).json({ message: 'Invalid delivery service selected' });
    }

    // Return the available meals
    res.status(200).json({ meals });
  } catch (err) {
    console.error('Error retrieving meals:', err);
    res.status(500).json({ message: 'Error retrieving meals', error: err.message });
  }
};
