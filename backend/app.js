const express = require("express");
var cors = require("cors");
const app = express();
const mongoConnect=require("./config/database").mongoConnect;
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//login route
const loginRoutes= require("./routes/login.routes")

//product routes
const ProductRoutes= require("./routes/index.routes")


//api routes here
app.use('/', loginRoutes)
app.use('/api',  ProductRoutes)


mongoConnect()
app.listen(4000 , ()=>{
    console.log("server start on 4000")
})