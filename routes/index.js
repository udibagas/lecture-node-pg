const Controller = require("../controllers");
const CustomerController = require("../controllers/customer.controller");
const router = require("express").Router();

router.get("/", Controller.home);
router.get("/customers", CustomerController.index);
router.use("/orders", require("./orders"));

module.exports = router;
