const express = require("express");
const app = express();
const pgPromise = require("pg-promise");

const PORT = process.env.PORT || 8000;

// get env variables
require("dotenv").config();

const pgp = pgPromise({
  error(err, e) {
    if (err) {
      return console.log(err);
    }
    console.log("E: ", err, e, e.cn);
  },
});
const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE } = process.env;

const db = pgp({
  user: DB_USER,
  password: DB_PASS,
  port: Number(DB_PORT),
  host: DB_HOST,
  database: DB_DATABASE,
});

let sco;
db.connect()
  .then((obj) => {
    console.log("connected");
    sco = obj;
    // return sco.any("SELECT * FROM Courses LIMIT 5");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
