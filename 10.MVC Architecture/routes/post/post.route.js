const { Router } = require("express");
const postController = require("../../controllers/post/postController.js");
const router = Router();

router.get("/", postController);

module.exports = router;
