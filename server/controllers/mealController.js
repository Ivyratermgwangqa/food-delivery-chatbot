// server/controllers/mealController.js

const Meal = require('../models/meal');

// Create a new meal (Admin only)
const createMeal = async (req, res) => {
  try {
    const { name, description, price, category, image, available } = req.body;
    const newMeal = new Meal({ name, description, price, category, image, available });
    await newMeal.save();
    res.status(201).json(newMeal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all meals
const getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json(meals);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a specific meal by ID
const getMealById = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }
    res.status(200).json(meal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a specific meal
const updateMeal = async (req, res) => {
  try {
    const { name, description, price, category, image, available } = req.body;
    const meal = await Meal.findByIdAndUpdate(
      req.params.id,
      { name, description, price, category, image, available },
      { new: true }
    );
    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }
    res.status(200).json(meal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a specific meal
const deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndDelete(req.params.id);
    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }
    res.status(200).json({ message: 'Meal deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createMeal,
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMeal,
};
