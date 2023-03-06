const route = require("express").Router();
const imageCtrl = require("../controller/imageCtrl");

route.post(`/product/upload`, imageCtrl.uploadProductImg);
route.post(`/product/destroy`, imageCtrl.deleteProductImg);

route.post(`/profile/upload`, imageCtrl.uploadProfileImg);
route.post(`/profile/destroy`, imageCtrl.deleteProfileImg);

module.exports = route;
