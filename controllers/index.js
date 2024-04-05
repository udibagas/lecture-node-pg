"use strict";

const Customer = require("../models/customer");
const Order = require("../models/order");
const View = require("../views");

class Controller {
  static async showCustomers() {
    try {
      const customers = await Customer.findAll();
      View.showData(customers);
    } catch (error) {
      View.showError(error);
    }
  }

  static async showOrders() {
    try {
      const orders = await Order.findAll();
      View.showOrders(orders);
    } catch (error) {
      View.showError(error);
    }
  }

  static async showOrderById(id) {
    try {
      const order = await Order.findById(id);
      View.showOrder(order);
    } catch (error) {
      View.showError(error);
    }
  }

  static async showOrdersWeb(req, res) {
    const { CustomerId } = req.query;

    console.log(req.query);

    try {
      const orders = await Order.findAll(CustomerId);
      res.send(orders);
    } catch (error) {
      res.send(error.message);
      console.log(error);
    }
  }

  static async showCustomersWeb(req, res) {
    try {
      const customers = await Customer.findAll();
      res.send(customers);
    } catch (error) {
      res.send(error.message);
      console.log(error);
    }
  }

  static async showOrderByIdWeb(req, res) {
    console.log(req.params);

    try {
      const order = await Order.findById(req.params.id);
      res.json(order);
    } catch (error) {
      res.send(error.message);
      console.log(error);
    }
  }

  static home(req, res) {
    res.send("Home");
  }

  static newOrder(req, res) {
    res.send("New Order");
  }
}

module.exports = Controller;
