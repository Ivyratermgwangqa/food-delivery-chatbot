// server/routes/mealRoutes.js

const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController');

// Admin route to create a meal
router.post('/', mealController.createMeal);

// Get all meals (available to users and admins)
router.get('/', mealController.getAllMeals);

// Get a specific meal by ID
router.get('/:id', mealController.getMealById);

// Admin route to update a meal
router.put('/:id', mealController.updateMeal);

// Admin route to delete a meal
router.delete('/:id', mealController.deleteMeal);

module.exports = router;
