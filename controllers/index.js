const Order = require("../models/order");
const View = require("../views");

class Controller {
  static async showOrders() {
    try {
      const orders = await Order.getOrders();
      View.showOrders(orders);
    } catch (error) {
      View.showError(error);
    }
  }
}

module.exports = Controller;
