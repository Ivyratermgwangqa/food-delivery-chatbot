const express = require('express');
const router = express.Router();
const { handleUserMessage } = require('../controllers/chatbotController');

// ✅ Correct: handler must be a function
router.post('/message', handleUserMessage);

module.exports = router;
