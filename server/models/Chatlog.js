const mongoose = require('mongoose');

// Define the ChatLog schema
const chatLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  messages: [
    {
      sender: { type: String, enum: ['user', 'bot'], required: true },
      text: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  timestamp: { type: Date, default: Date.now },
});

// Create and export the ChatLog model
const ChatLog = mongoose.model('ChatLog', chatLogSchema);

module.exports = ChatLog;
