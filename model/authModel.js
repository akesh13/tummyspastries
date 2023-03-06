const mongoose = require("mongoose");

const Auth = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      default: "user",
    },
    orders: {
      type: Object,
      default: {},
    },
    cart: {
      type: Array,
      default: [],
    },
    image: {
      type: Object,
      default: {
        url: "https://bitsofco.de/content/images/2018/12/broken-1.png",
      },
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

module.exports = mongoose.model("Auth", Auth);
