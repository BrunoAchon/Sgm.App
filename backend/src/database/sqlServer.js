// const { Sequelize } = require('sequelize')
// const config = require('../config/config')

// //const sequelize = new Sequelize(config)

// const sequelize = new Sequelize('SW0000', 'sa', '123456', {
//     host: 'BRUNO',
//     dialect: 'mssql'
//   });

//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }  

// module.exports = sequelize

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('SW0000', 'sa', '123456', {
  host: 'BRUNO',
  dialect: 'mssql',
})

try {
  const scon = sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
