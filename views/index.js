"use strict";

class View {
  static showData(data) {
    console.table(data);
  }

  static showOrders(data) {
    console.table(
      data.map((el) => {
        return {
          Date: el.formattedDate,
          Product: el.productName,
          Qty: el.quantity,
          Price: el.formatedPrice,
          "Total Amount": el.calculateTotalAmount(),
          Status: el.status ? "DONE" : "PENDING",
          Customer: el.customer,
        };
      })
    );
  }

  static showOrder(order) {
    console.log(order);
  }

  static showError(err) {
    console.log(err.message);
  }
}

module.exports = View;
