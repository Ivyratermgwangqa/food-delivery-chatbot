const express = require('express');
const router = express.Router();

// Basic test route
router.get('/', (req, res) => {
  res.json({ message: 'User routes working' });
});

module.exports = router;