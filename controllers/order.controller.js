const Customer = require("../models/customer");
const Order = require("../models/order");

class OrderController {
  static async index(req, res) {
    const { CustomerId } = req.query;

    try {
      const customers = await Customer.findAll();
      const orders = await Order.findAll(CustomerId);
      res.render("orders", { orders, customers });
    } catch (error) {
      res.send(error.message);
      console.log(error);
    }
  }
}

module.exports = OrderController;
