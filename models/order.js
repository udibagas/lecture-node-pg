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
    status,
    customer
  ) {
    this.id = id;
    this.date = date; // data type = date
    this.productName = productName;
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.CustomerId = CustomerId;
    this.status = status;
    this.customer = customer;
  }

  get formattedDate() {
    return this.date.toLocaleString("id-ID", {
      dateStyle: "medium",
    });
  }

  get formatedPrice() {
    return this.productPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  calculateTotalAmount() {
    return (this.quantity * this.productPrice).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  static async findAll() {
    const query = `
      SELECT
        o.*,
        c.name AS "customer"
      FROM "Orders" o
      JOIN "Customers" c ON c.id = o."CustomerId"
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
        el.status,
        el.customer
      );
    });
  }

  static async findById(orderId) {
    const query = `SELECT * FROM "Orders" WHERE id = $1`;
    const { rows } = await pool.query(query, [orderId]);

    const {
      id,
      date,
      productName,
      quantity,
      productPrice,
      CustomerId,
      status,
    } = rows[0];

    return new Order(
      id,
      date,
      productName,
      quantity,
      productPrice,
      CustomerId,
      status
    );
  }
}

module.exports = Order;
