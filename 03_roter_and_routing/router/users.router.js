// using express router for routing
const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.send("<h1> i am a about route </h1>");
});

router.get("/contact", (req, res) => {
  res.send("<h1> i am a contact route </h1>");
});

module.exports = router;
