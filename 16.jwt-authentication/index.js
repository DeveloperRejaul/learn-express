const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require("dotenv").config();
const port = 3000;
const userRouter = require("./router/userRouter.js");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/JWT")
  .then((res) => {
    console.log("database is connected");
  })
  .catch((error) => {
    console.log("db is not connected " + error.message);
  });

// user route
app.use("/user", userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
