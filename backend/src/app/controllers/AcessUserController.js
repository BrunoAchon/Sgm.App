const Task = require("../models");

class AcessUserController {
  async store(req, res) {
    const { email, password } = req.body;

    const acess_user = await Acess_User.findOne({ where: { email } });

    if (!acess_user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!(await acess_user.checkPassword(password))) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    return res.json({
      acess_user,
      token: acess_user.generateToken(),
    });
    //return res.status(200).send()
  }
}
module.exports = new AcessUserController();
