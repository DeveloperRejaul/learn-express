const express = require("express");
const app = express();
const PORT = 5000;

// Using body-parser for plaing form data
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// register Route for post
app.post("/register", (req, res) => {
  // resiveing form data
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`<h1> My name is ${fullName}, I am ${age} years old </h1>`);
});

// register Route
app.use("/register", (req, res) => {
  // sending response
  res.sendFile(__dirname + "/view/register.html");
});

app.listen(PORT, () => console.log(`server listening at ${PORT}`));
