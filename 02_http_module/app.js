const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Wellcome to http module sapter");
});

app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});

app.put("/", function (req, res) {
  res.send("POST request to the homepage");
});

app.delete("/:id", function (req, res) {
  const { id } = req.params;
  res.send(`Delete record with id ${id}`);
});

module.exports = app;
