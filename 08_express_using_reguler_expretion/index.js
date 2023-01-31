const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute.js");
require("dotenv").config();
const port = process.env.PORT || 3000;

// useing regolur expretion route
app.use("/user", userRoute);

// Home Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.send("Bad request");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
