const { predictChatbotResponse } = require('../services/pythonService');

// Handle user's message
const handleUserMessage = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const predictedIntent = await predictChatbotResponse(message);
        res.status(200).json({ intent: predictedIntent });
    } catch (error) {
        console.error('Error predicting intent:', error);
        res.status(500).json({ error: 'Failed to predict intent' });
    }
};

// ✅ Correct export
module.exports = {
    handleUserMessage,
};