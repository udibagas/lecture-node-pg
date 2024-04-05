"use strict";

class View {
  static showData(data) {
    console.table(data);
  }

  static showOrders(orders) {
    orders = orders.map((el) => {
      return {
        Date: el.formattedDate,
        "Product Name": el.productName,
        Qty: el.quantity,
        Price: el.priceInRupiah,
        Customer: el.customer,
      };
    });
    console.table(orders);
  }

  static showError(error) {
    console.log(error.message);
  }

  static showOrder(order) {
    console.log(order);
  }
}

module.exports = View;
