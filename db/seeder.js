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

const queryInsertCustomers = `
  INSERT INTO "Customers" ("name")
  VALUES
    ${customers}
  RETURNING *
`;

const queryInsertOrders = `
  INSERT INTO "Orders" ("date", "productName", "quantity", "productPrice", "CustomerId")
  VALUES
    ${orders}
  RETURNING *
`;

(async () => {
  try {
    const { rows: customers } = await pool.query(queryInsertCustomers);
    console.table(customers);
    const { rows: orders } = await pool.query(queryInsertOrders);
    console.table(orders);
  } catch (error) {
    console.log(error.message);
  }
})();
