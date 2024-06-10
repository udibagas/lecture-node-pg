const pool = require("../db/connection");

class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  // ! semua data yang keluar dari model harus berupa instance!
  static async findAll() {
    const query = `SELECT * FROM "Customers" ORDER BY "name" ASC`;
    const { rows } = await pool.query(query);
    return rows.map((el) => {
      return new Customer(el.id, el.name);
    });
  }
}

module.exports = Customer;
