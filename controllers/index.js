const Order = require("../models/order");
const View = require("../views");

class Controller {
  static async showOrders() {
    const orders = await Order.getOrders();
    View.showOrders(orders);
  }
}

module.exports = Controller;
