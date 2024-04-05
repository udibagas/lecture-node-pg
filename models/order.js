"use strict";

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
    return this.date.toLocaleString("id-ID", {
      dateStyle: "short",
    });
  }

  get priceInRupiah() {
    return this.productPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  static async findAll(CustomerId) {
    let query = `
      SELECT
        o.*,
        c.name AS "customer"
      FROM "Orders" o
      JOIN "Customers" c ON c.id = o."CustomerId" 
    `;

    if (CustomerId) {
      query += `WHERE o."CustomerId" = ${CustomerId}`;
    }

    query += ` ORDER BY "date" DESC`;

    const { rows } = await pool.query(query);
    return rows.map((el) => {
      const {
        id,
        date,
        productName,
        quantity,
        productPrice,
        CustomerId,
        customer,
      } = el;
      return new Order(
        id,
        date,
        productName,
        quantity,
        productPrice,
        CustomerId,
        customer
      );
    });
  }

  static async findById(orderId) {
    const query = `
      SELECT
        o.*,
        c.name AS "customer"
      FROM "Orders" o
      JOIN "Customers" c ON c.id = o."CustomerId" 
      WHERE o.id = $1
    `;

    const { rows, rowCount } = await pool.query(query, [orderId]);

    if (rowCount == 0) throw new Error(`Order with id ${orderId} is not found`);

    const {
      id,
      date,
      productName,
      quantity,
      productPrice,
      CustomerId,
      customer,
    } = rows[0];

    return new Order(
      id,
      date,
      productName,
      quantity,
      productPrice,
      CustomerId,
      customer
    );
  }
}

module.exports = Order;
