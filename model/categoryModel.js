const mongoose = require("mongoose");

const CategoryModel = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "provide category title"],
    },
  },
  {
    collection: "category",
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", CategoryModel);
