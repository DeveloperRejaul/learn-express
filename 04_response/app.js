const express = require("express");
const app = express();
const userRoute = require("./router/users.router.js");

// using express router
app.use("/user", userRoute);

// sending html file
app.use("/register", (req, res) => {
  res.statusCode = 201;
  res.sendFile(__dirname + "/views/register.html");
});

// Cookie , header
app.get("/cookie", (req, res) => {
  res.statusCode = 201;
  res.cookie("name", "rejaul"); // set cookie
  res.cookie("age", "22"); // set cookie
  res.clearCookie("name"); // clear cookie
  res.append("id", "54536879"); // set header
  res.send(" I am Cookie Page ");
  res.end();
});

// for Home Router
app.use("/", (req, res) => res.send("I am server Page"));

// For Error
app.use((req, res) => res.send("page is not pound"));
module.exports = app;
