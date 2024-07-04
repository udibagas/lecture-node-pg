const Controller = require("./controllers");
const command = process.argv[2];

if (command == "orders") {
  Controller.showOrders();
}
