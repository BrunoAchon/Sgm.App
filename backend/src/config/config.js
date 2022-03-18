const dotenv = require("dotenv");

dotenv.config();
const { DB_USER, DB_PWD, DB_NAME, DB_HOST, DB_DIALECT, PORT } = process.env;

const config = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  define: {
    timestamps: true
    // underscore:false
  }
}

module.exports = config


// const dotenv = require("dotenv");

// dotenv.config();
// const { DB_USER, DB_PWD, DB_NAME, DB_HOST, DB_DIALECT, PORT } = process.env;

// const config = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PWD,
//   server: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   options : {
//     trustedconnection: true,
//     enableArithAbort: true,
//     instancename: ""
//   },
//   port: 1433
// };

// module.exports = config
