class View {
  static showData(data) {
    console.table(data);
  }

  static showOrders(orders) {
    orders = orders.map((el) => {
      return {
        Date: el.formattedDate,
        Product: el.productName,
        Price: el.priceInRupiah,
        Qty: el.quantity,
        Customer: el.customer,
      };
    });
    console.table(orders);
  }

  static showError(error) {
    console.error(error.message);
  }
}

module.exports = View;
