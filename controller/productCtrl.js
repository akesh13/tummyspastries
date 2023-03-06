const Product = require("../model/productModel");

const ProductCtrl = {
  getAllProducts: async (req, res) => {
    try {
      let data = await Product.find();
      res.json({
        products: data,
        length: data.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      let product = await Product.findById({ _id: req.params.id });
      res.status(200).json({ product });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      let product = await Product.create(req.body);
      res.status(200).json({ msg: "Product created successfully" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      let product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      if (!product)
        return res.status(400).json({ msg: "Product doesn't exists." });

      res.status(200).json({ msg: "Product updated successfully" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findOneAndDelete({ _id: req.params.id });
      res.status(200).json({ msg: "product deleted successfully" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = ProductCtrl;
