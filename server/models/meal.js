// server/models/mealModel.js

const mongoose = require('mongoose');

// Define the Meal schema
const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true, // URL or file path for the meal image
  },
  available: {
    type: Boolean,
    default: true, // Meal availability flag
  },
});

// Create a Meal model
const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
