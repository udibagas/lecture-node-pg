"use strict";

const Customer = require("../models/customer");
const Order = require("../models/order");
const View = require("../views");

class Controller {
  static async customers() {
    try {
      const users = await Customer.findAll();
      View.showData(users);
    } catch (error) {
      View.showError(error);
    }
  }

  static async orders() {
    try {
      const orders = await Order.findAll();
      View.showOrders(orders);
    } catch (error) {
      View.showError(error);
    }
  }

  static async order(id) {
    try {
      const order = await Order.findById(id);
      View.showOrder(order);
    } catch (error) {
      View.showError(error);
    }
  }
}

module.exports = Controller;
