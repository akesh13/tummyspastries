const mongoose = require("mongoose");
const ProductModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide product title"],
      trim: true,
      unique: true,
      maxlength: [100, "Name cannot be more than 100 characters."],
    },
    category: {
      type: String,
      required: [true, "Please provide category"],
    },
    price: {
      type: Number,
      required: [true, "Please provide price"],
    },
    qnty: {
      type: String,
      required: [true, "Please provide quantity"],
    },
    desc: {
      type: String,
      required: [true, "Please provide description"],
    },
    image: {
      type: Object,
      required: [true, "Please provide image object"],
    },
    stock: {
      type: Number,
      required: [true, "Please provide the stock"],
    },
    sold: {
      type: Number,
      default: 0,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Array,
      default: [],
    },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductModel);
