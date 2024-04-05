const Controller = require("../controllers");
const router = require("express").Router();

router.get("/", Controller.showOrdersWeb);
router.get("/add", Controller.newOrder);
router.get("/:id", Controller.showOrderByIdWeb);

module.exports = router;
