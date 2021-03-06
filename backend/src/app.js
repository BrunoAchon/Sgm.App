require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const express = require("express");

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.static("public"));
    this.express.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.express.use(require("./routes/AcessUserRoutes"));
  }
}

module.exports = new AppController().express;
