const Controller = require("../controllers");
const router = require("express").Router();

router.get("/", Controller.home);
router.use("/orders", require("./orders"));
router.use("/customers", require("./customers"));

module.exports = router;
