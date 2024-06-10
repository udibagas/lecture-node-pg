const pool = require("../db/connection");

const customersDDL = `
  CREATE TABLE IF NOT EXISTS "Customers" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL
  )
`;

const ordersDDL = `
  CREATE TABLE IF NOT EXISTS "Orders" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL,
    "productName" VARCHAR(50) NOT NULL,
    "quantity" INT NOT NULL,
    "productPrice" INT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT FALSE,
    "CustomerId" INT NOT NULL REFERENCES "Customers" ("id")
      ON DELETE RESTRICT
      ON UPDATE RESTRICT
  )
`;

// pool.query(customersDDL, (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(`Success create table "Customers"`);
//     pool.query(ordersDDL, (err, result) => {
//       if (err) {
//         console.log(err.message);
//       } else {
//         console.log(`Success create table "Orders"`);
//       }
//     });
//   }
// });

// pool
//   .query(customersDDL)
//   .then((result) => {
//     console.log(`Success create table "Customers"`);
//     return pool.query(ordersDDL);
//   })
//   .then((result) => {
//     console.log(`Success create table "Orders"`);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// async function migrate() {
//   try {
//     await pool.query(`DROP TABLE IF EXISTS "Orders", "Customers"`);
//     await pool.query(customersDDL);
//     console.log(`Success create table "Customers"`);
//     await pool.query(ordersDDL);
//     console.log(`Success create table "Orders"`);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// migrate();

(async () => {
  try {
    await pool.query(`DROP TABLE IF EXISTS "Orders", "Customers"`);
    await pool.query(customersDDL);
    console.log(`Success create table "Customers"`);
    await pool.query(ordersDDL);
    console.log(`Success create table "Orders"`);
  } catch (error) {
    console.log(error.message);
  }
})();
