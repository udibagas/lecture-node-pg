const pool = require("../db/connection");

class Order {
  constructor(
    id,
    date,
    productName,
    quantity,
    productPrice,
    CustomerId,
    customer
  ) {
    this.id = id;
    this.date = date;
    this.productName = productName;
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.CustomerId = CustomerId;
    this.customer = customer;
  }

  get formattedDate() {
    return this.date.toLocaleString("id-ID", { dateStyle: "short" });
  }

  get priceInRupiah() {
    return this.productPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  static async findAll() {
    const { rows } = await pool.query(`
      SELECT
        o.*,
        c.name AS "customer"
      FROM "Orders" o
      JOIN "Customers" c ON c.id = o."CustomerId"
      ORDER BY "date" DESC
    `);

    return rows.map((el) => {
      return new Order(
        el.id,
        el.date,
        el.productName,
        el.quantity,
        el.productPrice,
        el.CustomerId,
        el.customer
      );
    });
  }
}

module.exports = Order;
