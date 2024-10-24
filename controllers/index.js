const Customer = require("../models/customer");
const Order = require("../models/order");
const View = require("../views");

class Controller {
  static async getCustomers() {
    try {
      const customers = await Customer.findAll();
      View.showData(customers);
    } catch (error) {
      View.showError(error);
    }
  }

  static async getOrders() {
    try {
      const orders = await Order.findAll();
      View.showOrders(orders);
    } catch (error) {
      View.showError(error);
    }
  }
}

module.exports = Controller;
