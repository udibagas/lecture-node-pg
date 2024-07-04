class View {
  static showOrders(orders) {
    console.log(orders);
    console.table(
      orders.map((el) => {
        return {
          Date: el.formattedDate,
          Product: el.productName,
          Qty: el.quantity,
          Price: el.getPriceInRupiah(),
          Customer: el.customer.name,
        };
      })
    );
  }
}

module.exports = View;
