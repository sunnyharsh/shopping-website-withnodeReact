const express = require("express");
const routes = express.Router();
const loginController=require('../controllers/login.controller')

routes.post("/login" , loginController.login)

module.exports = routes;