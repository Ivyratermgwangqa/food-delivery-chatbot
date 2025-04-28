require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const notFound = require('./middleware/notFoundMiddleware');
const errorHandler = require('./middleware/errorMiddleware');
const mealRoutes = require('./routes/mealRoutes');
const userRoutes = require('./routes/userRoutes');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/meals', mealRoutes);
app.use(errorHandler);
app.use(notFound);


// Error Handling Middleware
app.use(require('./middleware/notFoundMiddleware'));
app.use(require('./middleware/errorMiddleware'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));