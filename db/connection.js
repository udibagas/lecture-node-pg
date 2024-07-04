const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "order_app",
  idleTimeoutMillis: 100,
});

module.exports = pool;
