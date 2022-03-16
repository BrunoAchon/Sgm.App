const { Sequelize } = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(config);

module.exports = sequelize
  

// const sql = require('mssql')
// const config = require('../config/config')

// async function getConn(){
//     try {
//         await sql.connect(config)
//         console.log(sql.connect(config))
//     } catch (error) {
//         console.log("não conectei")
//         console.log(error)
//     }
// }

// module.exports = { getConn }
