// backend/models/Order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    meal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Meal',
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'delivered', 'cancelled'],
      default: 'pending',
    },
    deliveryDetails: {
      address: { type: String, required: true },
      eta: { type: String }, // Example: "30 min"
      uberOrderId: { type: String }, // If linked with UberEats API
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
