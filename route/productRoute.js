const route = require("express").Router();
const ProductCtrl = require("../controller/productCtrl");
const auth = require("../middleware/auth");
const adminAuth = require("../middleware/AdminAuth");

route.get(`/getAll`, ProductCtrl.getAllProducts);
route.get(`/get/:id`, ProductCtrl.getSingleProduct);

route.post(`/create`, auth, adminAuth, ProductCtrl.createProduct);
route.put(`/update/:id`, auth, adminAuth, ProductCtrl.updateProduct);

route.delete(`/delete/:id`, auth, adminAuth, ProductCtrl.deleteProduct);

module.exports = route;
