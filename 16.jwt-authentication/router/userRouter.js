const { signinController } = require("../controllers/signinController.js");
const { loginController } = require("../controllers/loginController.js");
const { homeController } = require("../controllers/homeController.js");
const { authRouteMiddleware } = require("../middleware/authRouteMiddleware.js");
const erroeHaldleMiddleware = require("../middleware/erroeHaldleMiddleware.js");
const router = require("express").Router();

router.post("/signin", signinController);
router.post("/login", loginController);
router.get("/home", authRouteMiddleware, homeController);
router.use(erroeHaldleMiddleware);

module.exports = router;
