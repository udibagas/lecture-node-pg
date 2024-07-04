const pool = require("../db/connection");
const Customer = require("./customer");

class Order {
  constructor(
    id,
    date,
    productName,
    quantity,
    productPrice,
    CustomerId,
    customerName
  ) {
    this.id = id;
    this.date = date;
    this.productName = productName;
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.CustomerId = CustomerId;
    this.customer = new Customer(CustomerId, customerName);
  }

  get formattedDate() {
    return this.date.toLocaleString("id-ID", {
      dateStyle: "medium",
    });
  }

  getPriceInRupiah() {
    return this.productPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  static async getOrders() {
    const { rows } = await pool.query(`
      SELECT 
        o.*, 
        c.name AS "customerName"
      FROM "Orders" o
      JOIN "Customers" c ON c.id = o."CustomerId"
    `);
    return rows.map((el) => {
      return new Order(
        el.id,
        el.date,
        el.productName,
        el.quantity,
        el.productPrice,
        el.CustomerId,
        el.customerName
      );
    });
  }
}

module.exports = Order;
