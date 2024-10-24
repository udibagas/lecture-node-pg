const { Pool } = require("pg");

// create instance
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "MY_STORE",
  idleTimeoutMillis: 100,
  connectionTimeoutMillis: 3000,
});

module.exports = pool; //! yang diexport adalah instance dari class Pool, bukan class-nya itu sendiri
