const { AcessUser } = require("../models");

class AcessUserController {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await AcessUser.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    return res.json({
      user,
      token: user.generateToken(),
    });
  }
}
module.exports = new AcessUserController();
