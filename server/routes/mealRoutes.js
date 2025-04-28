// backend/routes/mealRoutes.js

const express = require('express');
const router = express.Router();
const {
  createMeal,
  getMeals,
  getMealById,
  updateMeal,
  deleteMeal,
} = require('../controllers/mealController');

// For now, assuming basic access (authentication/authorization can be added later)

// @route   POST /api/meals
// @desc    Create a meal
router.post('/', createMeal);

// @route   GET /api/meals
// @desc    Get all meals
router.get('/', getMeals);

// @route   GET /api/meals/:id
// @desc    Get single meal by ID
router.get('/:id', getMealById);

// @route   PUT /api/meals/:id
// @desc    Update a meal
router.put('/:id', updateMeal);

// @route   DELETE /api/meals/:id
// @desc    Delete a meal
router.delete('/:id', deleteMeal);

module.exports = router;