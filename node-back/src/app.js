const express = require("express");
const cors = require("cors");
const router = require("./router");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.options("*", cors());

app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).send("Not found");
});

app.use((err, req, res, nexxt) => {
  // console.log(err);
  let { statusCode, message } = err;
  res.status(statusCode || 400).send(message || "An error occured");
});

module.exports = app;