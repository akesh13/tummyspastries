const route = require("express").Router();
const orderCtrl = require("../controller/orderCtrl");
const auth = require("../middleware/auth");
const adminAuth = require("../middleware/AdminAuth");

route.post(`/newOrder`, auth, orderCtrl.newOrder);

route.get(`/allOrders`, auth, adminAuth, orderCtrl.getAll);
route.delete(`/delete/:id`, auth, adminAuth, orderCtrl.delete);

module.exports = route;
