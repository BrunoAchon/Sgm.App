"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("acess_users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      email_confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_expiration: {
        type: Sequelize.DATE,
        allowNull: false,
        // defaultValue: sequelize.literal('DATE_ADD(NOW(), INTERVAL 6 month)')
      },
      password_blocked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone_confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      two_factor: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      lockout_end: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      acess_failed_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("acess_users");
  },
};
