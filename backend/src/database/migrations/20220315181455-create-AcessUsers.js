'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable(
       'AcessUsers', {
          id: { 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          userName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          emailConfirm: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
          },
          password:{
            type: Sequelize.STRING,
            allowNull: false
          },
          phone:{
            type: Sequelize.STRING,
            allowNull: false
          },
          phoneConfirm:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
          },
          twoFactor:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
          },
          lockoutEnd:{
            type: Sequelize.DATE,
            allowNull: false,
          },
          acessFailedCount:{
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false,
          },
          createdAt:{
            type: Sequelize.DATE,
            allowNull: false,
          },
          updatedAt:{
            type: Sequelize.DATE,
            allowNull: false,
          }
        });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('AcessUsers');
  }
};
