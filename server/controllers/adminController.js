const User = require('../models/user');
const Meal = require('../models/meal');
const Order = require('../models/order');

// User Management

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add New User
exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Menu Management

// Add Meal
exports.addMeal = async (req, res) => {
  try {
    const meal = new Meal(req.body);
    await meal.save();
    res.status(201).json(meal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get All Meals
exports.getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Meal by ID
exports.getMealById = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }
    res.status(200).json(meal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Meal
exports.updateMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }
    res.status(200).json(meal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Meal
exports.deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndDelete(req.params.id);
    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }
    res.status(200).json({ message: 'Meal deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Order Management

// Get All Orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Order Status
exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Order
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// System Overview (optional)

exports.getStatistics = async (req, res) => {
  try {
    const stats = {
      totalUsers: await User.countDocuments(),
      totalMeals: await Meal.countDocuments(),
      totalOrders: await Order.countDocuments(),
    };
    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
