const Controller = require("./controllers");

const command = process.argv[2];

switch (command) {
  case "customers":
    Controller.customers();
    break;

  case "orders":
    Controller.orders();
    break;

  case "order":
    const id = process.argv[3];
    Controller.order(id);
    break;

  default:
    break;
}
