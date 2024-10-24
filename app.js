const Controller = require("./controllers");

const command = process.argv[2];

switch (command) {
  case "customers":
    Controller.getCustomers();
    break;

  case "orders":
    Controller.getOrders();
    break;

  default:
    break;
}
