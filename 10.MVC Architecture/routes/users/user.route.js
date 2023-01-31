const { Router } = require("express");
const getUserController = require("../../controllers/users/get.users.controller.js");
const postUserController = require("../../controllers/users/post.user.controller.js");
const router = Router();

router.get("/", getUserController);
router.post("/", postUserController);

module.exports = router;
