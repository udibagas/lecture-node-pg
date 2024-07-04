const pool = require("./connection");

const createCustomersTable = `
  CREATE TABLE IF NOT EXISTS "Customers" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
  )
`;

const createOrdersTable = `
  CREATE TABLE IF NOT EXISTS "Orders" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL,
    "productName" VARCHAR(50) NOT NULL,
    "quantity" INT NOT NULL,
    "productPrice" INT NOT NULL,
    "CustomerId" INT NOT NULL REFERENCES "Customers" ("id")
      ON DELETE RESTRICT
      ON UPDATE RESTRICT
  )
`;

pool
  .query(`DROP TABLE IF EXISTS "Orders", "Customers"`)
  .then((result) => {
    console.log(`Tables dropped!`);
    return pool.query(createCustomersTable);
  })
  .then((result) => {
    console.log(`Success create table Customers`);
    return pool.query(createOrdersTable);
  })
  .then((result) => {
    console.log(`Success create table Orders`);
  })
  .catch((err) => {
    console.log(err.message);
  });
