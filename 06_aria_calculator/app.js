const express = require("express");
const app = express();

// using body-parser packese for palying from data
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//=========================================================================
// Tringle Route
app.get("/tringle", (req, res) => {
  res.sendFile(__dirname + "/views/tringle.html");
});

// Tringle Route
app.post("/tringle", (req, res) => {
  const { base, height } = req.body;
  const aria = Math.PI * base * height;
  res.send(`<h1>my calculatet Tringlr aria is: ${aria} </h1>`);
});
//=========================================================================
// Cercle get Route
app.get("/cercle", (req, res) => {
  res.sendFile(__dirname + "/views/cercle.html");
});

// Cercle Post Route
app.post("/cercle", (req, res) => {
  const cercle = req.body.myCercle;
  const calculatetCercleValue = cercle * cercle;
  res.send(`<h1>my calculatet cercle aria is: ${calculatetCercleValue} </h1>`);
});

//=========================================================================
// Home Route
app.use("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
