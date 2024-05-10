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
    "quantity" INTEGER NOT NULL,
    "productPrice" INTEGER NOT NULL,
    "CustomerId" INTEGER NOT NULL REFERENCES "Customers" ("id")
      ON DELETE CASCADE
      ON UPDATE CASCADE,
    "status" BOOLEAN NOT NULL DEFAULT FALSE
  )
`;

async function createTable() {
  try {
    await pool.query(`DROP TABLE IF EXISTS "Orders", "Customers"`);
    await pool.query(customerDDL);
    console.log(`Success create table Customers`);
    await pool.query(orderDDL);
    console.log(`Success create table Orders`);
  } catch (error) {
    console.log(error.message);
  }
}

createTable();
