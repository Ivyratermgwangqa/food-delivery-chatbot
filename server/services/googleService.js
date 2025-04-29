const axios = require('axios');

// Function to fetch meals from Google Places API
async function getMealsFromGoogle(location, budget) {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
            params: {
                location: location,   // Lat, Long
                radius: 5000,         // 5km search radius
                type: 'restaurant',
                key: process.env.GOOGLE_API_KEY
            }
        });

        const places = response.data.results;
        const filteredMeals = places.filter(place => {
            return place.price_level <= budget;  // Filtering by budget
        });

        return filteredMeals; // Return filtered restaurant data
    } catch (error) {
        throw new Error('Error fetching data from Google Places API');
    }
}

module.exports = { getMealsFromGoogle};
