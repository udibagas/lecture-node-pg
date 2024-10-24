const pool = require("../db/connection");

class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static async findAll() {
    const { rows } = await pool.query(
      `SELECT * FROM "Customers" ORDER BY "name" ASC`
    );

    return rows.map((el) => new Customer(el.id, el.name));
  }
}

module.exports = Customer;
