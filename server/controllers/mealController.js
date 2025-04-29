// backend/controllers/mealController.js

const Meal = require('../models/Meal');

// @desc    Create a new meal
// @route   POST /api/meals
// @access  Admin
const createMeal = async (req, res) => {
  try {
    const { name, description, price, diet, imageUrl } = req.body;

    const meal = new Meal({
      name,
      description,
      price,
      diet,
      imageUrl,
    });

    const createdMeal = await meal.save();
    res.status(201).json(createdMeal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all meals
// @route   GET /api/meals
// @access  Public
const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single meal by ID
// @route   GET /api/meals/:id
// @access  Public
const getMealById = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (meal) {
      res.json(meal);
    } else {
      res.status(404).json({ message: 'Meal not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a meal
// @route   PUT /api/meals/:id
// @access  Admin
const updateMeal = async (req, res) => {
  try {
    const { name, description, price, diet, imageUrl, available } = req.body;

    const meal = await Meal.findById(req.params.id);

    if (meal) {
      meal.name = name || meal.name;
      meal.description = description || meal.description;
      meal.price = price || meal.price;
      meal.diet = diet || meal.diet;
      meal.imageUrl = imageUrl || meal.imageUrl;
      meal.available = available !== undefined ? available : meal.available;

      const updatedMeal = await meal.save();
      res.json(updatedMeal);
    } else {
      res.status(404).json({ message: 'Meal not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a meal
// @route   DELETE /api/meals/:id
// @access  Admin
const deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (meal) {
      await meal.remove();
      res.json({ message: 'Meal removed' });
    } else {
      res.status(404).json({ message: 'Meal not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMeal,
  getMeals,
  getMealById,
  updateMeal,
  deleteMeal,
};