// server/routes/mealRoutes.js
const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

// GET /api/meals?diet=vegan&maxPrice=100
router.get('/', async (req, res) => {
  const { diet, maxPrice } = req.query;
  try {
    const filter = {};
    if (diet) filter.diet = diet;
    if (maxPrice) filter.price = { $lte: Number(maxPrice) };

    const meals = await Meal.find(filter);
    res.json(meals);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
