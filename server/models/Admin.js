const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  preferences: {
    dietary: String,
    budget: Number,
  },
  role: { type: String, default: 'user' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
