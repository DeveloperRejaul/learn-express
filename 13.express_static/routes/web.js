const router = require("express").Router();
const homeController = require("../controller/homeCroller.js");

router.get("/", homeController);

module.exports = router;
