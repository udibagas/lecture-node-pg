const fs = require("fs");
const pool = require("../db/connection");

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

const queryCustomers = `
  INSERT INTO "Customers" ("name")
  VALUES
    ${customers}
  RETURNING *
`;

const queryOrders = `
  INSERT INTO "Orders" ("date", "productName", "quantity", "productPrice", "CustomerId")
  VALUES
    ${orders}
  RETURNING *
`;

// console.log(queryOrders);

(async () => {
  try {
    const { rows } = await pool.query(queryCustomers);
    console.table(rows);
    const { rows: orders } = await pool.query(queryOrders); // Result : rows
    console.table(orders);
  } catch (error) {
    console.log(error.message);
  }
})();
