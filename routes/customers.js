const Controller = require("../controllers");
const router = require("express").Router();

router.get("/", Controller.showCustomersWeb);

module.exports = router;
