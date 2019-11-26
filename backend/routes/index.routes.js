const express = require("express");
const routes = express.Router();
const productController=require('../controllers/product.controller')
const setToken=require('../verification/setToken')
const tokenValid=require('../verification/tokenValid')
// routes.post("/login" , productController.login)
routes.post("/cart", setToken,tokenValid,  productController.products);
routes.get("/fetchcart", setToken,tokenValid, productController.cartFetch )
routes.post("/delete", setToken,tokenValid, productController.deleteCart);
routes.post("/update", setToken,tokenValid, productController.updateCart)

module.exports = routes;