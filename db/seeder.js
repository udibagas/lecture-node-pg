const fs = require("fs");
const pool = require("./connection");

const customers = JSON.parse(fs.readFileSync("./data/customers.json"))
  .map((el) => {
    return `('${el.name}')`;
  })
  .join(",\n");

const queryCustomers = `
  INSERT INTO "Customers" ("name")
  VALUES
    ${customers}
  RETURNING *
`;

const orders = JSON.parse(fs.readFileSync("./data/orders.json"))
  .map((el) => {
    return `('${el.date}', '${el.productName}', '${el.quantity}', '${el.productPrice}', '${el.CustomerId}')`;
  })
  .join(",\n");

const queryOrders = `
  INSERT INTO "Orders" ("date", "productName", "quantity", "productPrice", "CustomerId")
  VALUES
    ${orders}
  RETURNING *
`;

(async () => {
  try {
    const { rows: customers } = await pool.query(queryCustomers);
    console.table(customers);

    const { rows: orders } = await pool.query(queryOrders);
    console.table(orders);
  } catch (error) {
    console.log(error.message);
  }
})();
