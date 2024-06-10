const OrderController = require("../controllers/order.controller");

const router = require("express").Router();

router.get("/", OrderController.index);
router.get("/:id");
router.get("/add");
router.post("/add");
router.get("/edit/:id");
router.post("/edit/:id");
router.get("/delete/:id");

module.exports = router;
