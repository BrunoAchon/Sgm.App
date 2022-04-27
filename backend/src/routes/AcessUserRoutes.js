const routes = require("express").Router();

const authMiddleware = require("../app/middleware/auth");

const AcessUserController = require("../app/controllers/AcessUserController");

routes.post("/AcessUser", AcessUserController.login);

routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
