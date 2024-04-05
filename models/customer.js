"use strict";

const pool = require("../db/connection");

// abstraksi class & logic crud untuk table Customer
//! semua data yang keluar dari model harus berupa instance
class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static async findAll() {
    const query = `SELECT * FROM "Customers" ORDER BY "name" ASC`;
    const { rows } = await pool.query(query);
    return rows.map((el) => new Customer(el.id, el.name));
  }
}

module.exports = Customer;
