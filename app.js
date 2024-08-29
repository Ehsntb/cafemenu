const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();
const ejs = require("ejs");
const multer = require("multer");
const router = express.Route();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(port, function () {
  console.log("Started application on port %d", port);
});
