import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./route/web.js";
import dotenv from "dotenv";
import connectDB from "./config/connectDB";
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);

connectDB();


let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port);
});
