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

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views")); // This sets the directory for your views
app.set("view engine", "ejs"); // Assuming you're using EJS as your templating engine

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.get("/menu", function (request, response) {
  response.render("pages/menu");
});

app.listen(port, function () {
  console.log("Started application on port %d", port);
});
