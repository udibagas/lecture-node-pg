const fs = require("fs");
const pool = require("./connection");
const sql = fs.readFileSync("./db/schema.sql", "utf-8");

pool
  .query(sql)
  .then((result) => {
    console.log("Success create table");
  })
  .catch((err) => {
    console.log(err.message);
  });
