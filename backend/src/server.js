const app = require("./app");

app.listen(process.env.PORT || 3000);

// const express = require("express");
// const config = require("./config/database");
// const cors = require("cors");
// const conn = require("./database");

// const app = express();

// app.use(express.json());

// app.use(cors());

// app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// conn
//   .sync()
//   .then(() => {
//     app.listen(process.env.PORT || 3000);
//   })
//   .catch((err) => console.log(err));
