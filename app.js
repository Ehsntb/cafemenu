import createError from "http-errors";
import express, { Route, json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
require("dotenv").config();
import ejs from "ejs";
import multer from "multer";
import logger from "morgan";
import session from "express-session";
import bcrypt from "bcryptjs";
import { AdminJS, buildAdminRouter } from "./config/admin.js";

const router = Route();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));
app.set("views", join(__dirname, "views")); // This sets the directory for your views
app.set("view engine", "ejs"); // Assuming you're using EJS as your templating engine

// Session management
app.use(
  session({
    secret: "sessionsecret",
    resave: false,
    saveUninitialized: true,
  })
);

// Attach AdminJS router
app.use(AdminJS.options.rootPath, buildAdminRouter());

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.get("/menu", function (request, response) {
  response.render("pages/menu");
});

// Error handling
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(port, function () {
  console.log("Started application on port %d", port);
});
