const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const { mealId, address } = req.body;

  // Mock Uber Eats API call
  try {
    // In production: axios.post('UBER_EATS_API_URL', { ... })
    const mockResponse = {
      orderId: Math.floor(Math.random() * 1000000),
      status: 'processing',
      estimatedDelivery: '30 mins'
    };
    res.json(mockResponse);
  } catch (err) {
    res.status(500).json({ error: 'Order failed' });
  }
});

module.exports = router;