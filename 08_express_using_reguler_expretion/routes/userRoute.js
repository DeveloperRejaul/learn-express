const express = require("express");
const router = express.Router();

router.post("/:id([0-9]+)", function (req, res) {
  const { id } = req.params;
  res.send(id);
});

module.exports = router;
