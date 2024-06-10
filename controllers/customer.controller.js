const Customer = require("../models/customer");

class CustomerController {
  static async index(req, res) {
    try {
      const customers = await Customer.findAll();
      res.render("customers", { customers });
    } catch (error) {
      res.send(error.message);
      console.log(error);
    }
  }
}

module.exports = CustomerController;
