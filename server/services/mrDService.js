// services/mrDService.js
const axios = require('axios'); // Use axios for making HTTP requests

const MR_D_API_URL = 'https://api.mrd.com'; // Replace with the correct API URL for Mr D
const API_KEY = 'your-mr-d-api-key'; // Replace with your Mr D API key or authentication token

// Example function to place an order on Mr D
const placeOrder = async (orderDetails) => {
  try {
    const response = await axios.post(`${MR_D_API_URL}/orders`, orderDetails, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Return order confirmation data
  } catch (err) {
    throw new Error(`Error placing Mr D order: ${err.message}`);
  }
};

// Example function to get available meal options
const getMeals = async () => {
  try {
    const response = await axios.get(`${MR_D_API_URL}/meals`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });
    return response.data; // Return available meals
  } catch (err) {
    throw new Error(`Error retrieving Mr D meals: ${err.message}`);
  }
};

// Example function to track an order's status
const trackOrder = async (orderId) => {
  try {
    const response = await axios.get(`${MR_D_API_URL}/orders/${orderId}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });
    return response.data; // Return order status
  } catch (err) {
    throw new Error(`Error tracking Mr D order: ${err.message}`);
  }
};

module.exports = {
  placeOrder,
  getMeals,
  trackOrder,
};
