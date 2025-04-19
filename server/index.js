require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const notFound = require('./middleware/notFoundMiddleware');
const errorHandler = require('./middleware/errorMiddleware');
const mealRoutes = require('./routes/mealRoutes');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/chat', require('./routes/chatRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/meals', mealRoutes);
// app.use('/api/orders', require('./routes/orderRoutes'));
// app.use('/api/food', require('./routes/foodRoutes'));
// app.use('/api/admin', require('./routes/adminRoutes'));
app.use(errorHandler);
app.use(notFound);


// Error Handling Middleware
app.use(require('./middleware/notFoundMiddleware'));
app.use(require('./middleware/errorMiddleware'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});