const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const AcessUser = sequelize.define(
    "AcessUser",
    {
      user_name: DataTypes.STRING,
      email: DataTypes.STRING,
      email_confirm: DataTypes.BOOLEAN,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      password_expiration: DataTypes.DATE,
      password_blocked: DataTypes.BOOLEAN,
      phone: DataTypes.STRING,
      phone_confirm: DataTypes.BOOLEAN,
      two_factor: DataTypes.BOOLEAN,
      lockout_end: DataTypes.DATE,
      acess_failed_count: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeSave: async (acess_user) => {
          if (acess_user.password) {
            acess_user.password_hash = await bcrypt.hash(
              acess_user.password,
              8
            );
          }
        },
      },
    }
  );
  // aqui não foi usado uma arrow function pois o this deve pertencer a instancia deste usuario
  AcessUser.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
  };

  AcessUser.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET);
  };

  return AcessUser;
};
