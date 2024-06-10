const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "order_app",
  user: "postgres",
  password: "postgres",
  idleTimeoutMillis: 100,
});

module.exports = pool; // instance
