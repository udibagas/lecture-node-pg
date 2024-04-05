const pool = require("./connection");

const customerDDL = `
  CREATE TABLE IF NOT EXISTS "Customers" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL
  )
`;

const orderDDL = `
  CREATE TABLE IF NOT EXISTS "Orders" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL,
    "productName" VARCHAR(50) NOT NULL,
    "quantity" INT NOT NULL,
    "productPrice" INT NOT NULL,
    "CustomerId" INT NOT NULL REFERENCES "Customers" (id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
  )
`;

async function migrate() {
  try {
    await pool.query('DROP TABLE IF EXISTS "Orders", "Customers"');
    console.log(`Success drop tables`);
    await pool.query(customerDDL);
    console.log(`Success create table Customers`);
    await pool.query(orderDDL);
    console.log(`Success create table Orders`);
  } catch (error) {
    console.log(error.message);
  }
}

migrate();

// pool.query(customerDDL, (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(`Success create table Customers`);
//     pool.query(orderDDL, (err, result) => {
//       if (err) {
//         console.log(err.message);
//       } else {
//         console.log(`Success create table Orders`);
//       }
//     });
//   }
// });
