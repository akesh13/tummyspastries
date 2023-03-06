const route = require("express").Router();
const CategoryCtrl = require("../controller/categoryCtrl");
const auth = require("../middleware/auth");
const adminAuth = require("../middleware/AdminAuth");

route.get(`/getAll`, auth, adminAuth, CategoryCtrl.getAll);
route.get(`/get/:id`, auth, adminAuth, CategoryCtrl.getSingle);

route.post(`/create`, auth, adminAuth, CategoryCtrl.create);
route.put(`/update/:id`, auth, adminAuth, CategoryCtrl.update);
route.delete(`/delete/:id`, auth, adminAuth, CategoryCtrl.delete);

module.exports = route;
