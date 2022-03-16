const express = require('express')
const config = require('./config/config');
const cors = require('cors')

const app = express()
const conn = require("./database/sqlServer");

// // Config JSON response
 app.use(express.json())


// // CORS
app.use(cors() );

// // Public folder images
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

conn
  .sync()
  .then(() => {
    app.listen(5000)
  })
  .catch((err) => console.log(err))



// app.listen(5000);
// console.log(`Server is listening on : http://localhost:${5000}`)
// console.log(config)
