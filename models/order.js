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
    this.productPrice = productPrice;
    this.quantity = quantity;
    this.CustomerId = CustomerId;
    this.customer = new Customer(CustomerId, customerName);
  }

  get formattedDate() {
    return this.date.toLocaleString("id-ID", { dateStyle: "medium" });
  }

  get priceInRupiah() {
    return this.productPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    });
  }

  get customerName() {
    return this.customer.name;
  }

  // ! semua data yang keluar dari model harus berupa instance!
  static async findAll(CustomerId) {
    let query = `
      SELECT
        o.*,
        c."name" AS "customerName"
      FROM "Orders" o
      JOIN "Customers" c ON c.id = o."CustomerId"
    `;

    if (CustomerId) {
      query += `WHERE "CustomerId" = ${CustomerId}`;
    }

    query += `
      ORDER BY "date" DESC
    `;

    const { rows } = await pool.query(query);
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
