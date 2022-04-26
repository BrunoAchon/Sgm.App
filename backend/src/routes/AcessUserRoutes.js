const routes = require("express").Router();
const AcessUserController = require("../app/controllers/AcessUserController");

routes.post("/AcessUser", AcessUserController.login);

module.exports = routes;
