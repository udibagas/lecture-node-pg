const Controller = require("./controllers");
const [command, id] = process.argv.slice(2);

switch (command) {
  case "customers":
    Controller.showCustomers();
    break;

  case "orders":
    Controller.showOrders();
    break;

  case "order":
    Controller.showOrderById(id);
    break;

  default:
    break;
}
