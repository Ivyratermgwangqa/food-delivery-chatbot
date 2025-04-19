// server/models/Meal.js
const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  name: String,
  diet: String,
  price: Number,
  ingredients: [String],
});

module.exports = mongoose.model('Meal', MealSchema);
