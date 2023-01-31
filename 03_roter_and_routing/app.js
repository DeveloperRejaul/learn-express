const express = require("express");
const app = express();
const userRouter = require("./router/users.router.js");

// using user Rourter
app.use("/users", userRouter);

// using express for routing
// for home route
app.use("/", (req, res) => res.send("Hello World!"));

// For Error
app.use((req, res) => {
  res.send("<h1> page note pound </h1>");
});

module.exports = app;
