const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tokoku",
  password: "postgres",
  port: 5432,
  idleTimeoutMillis: 100,
});

// async function connect() {
//   try {
//     const { rows } = await pool.query("SELECT NOW()");
//     console.log(rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

module.exports = pool;
