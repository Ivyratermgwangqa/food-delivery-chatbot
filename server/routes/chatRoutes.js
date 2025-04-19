const express = require('express');
const router = express.Router();

// Mock NLP processor
const processQuery = (query) => {
  const entities = {
    diet: query.includes('vegan') ? 'vegan' : 
          query.includes('vegetarian') ? 'vegetarian' : null,
    budget: parseInt(query.match(/\d+/)?.[0] || 100)
  };
  return entities;
};

router.post('/chat', (req, res) => {
  const { message } = req.body;
  
  // Extract intent/entities (will replace with real NLP later)
  const { diet, budget } = processQuery(message.toLowerCase());

  // Mock response
  res.json({
    intent: 'find_meal',
    entities: { diet, budget },
    meals: [
      { id: 1, name: 'Vegan Burger', price: 85, diet: 'vegan' },
      { id: 2, name: 'Salad Bowl', price: 65, diet: 'vegetarian' }
    ]
  });
});

module.exports = router;