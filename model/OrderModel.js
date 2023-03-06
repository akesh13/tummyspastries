const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "Auth",
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    cart: {
      type: Array,
      default: [],
    },
    paymentMode: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
    },
    paymentStatus: {
      type: String,
      default: "unpaid",
    },
    orderStatus: {
      type: String,
      default: "process",
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", Order);
