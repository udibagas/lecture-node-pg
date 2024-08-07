const fs = require("fs");
const pool = require("./connection");

const customers = JSON.parse(fs.readFileSync("./data/customers.json", "utf-8"))
  .map((el) => {
    return `('${el.name}')`;
  })
  .join(",\n");

const orders = JSON.parse(fs.readFileSync("./data/orders.json", "utf-8"))
  .map((el) => {
    return `('${el.date}', '${el.productName}', '${el.quantity}', '${el.productPrice}', '${el.CustomerId}')`;
  })
  .join(",\n");

const insertCustomers = `
  INSERT INTO "Customers" ("name")
  VALUES
    ${customers}
  RETURNING *
`;

const insertOrders = `
  INSERT INTO "Orders" ("date", "productName", "quantity", "productPrice", "CustomerId")
  VALUES
    ${orders}
  RETURNING *
`;

pool
  .query(insertCustomers)
  .then(({ rows }) => {
    console.table(rows);
    return pool.query(insertOrders);
  })
  .then(({ rows }) => {
    console.table(rows);
  })
  .catch((err) => {
    console.log(err.message);
  });
