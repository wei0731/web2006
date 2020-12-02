const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const auth = require("./auth")
const debug = require('debug')("my-application")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use("/api",auth)

app.listen(3050,() =>{
    debug(3050)
    console.log(3050);
})