const express = require("express");
const userRouter = require("./routes/users/user.route.js");
const postRouter = require("./routes/post/post.route.js");
const dbConnect = require("./config/db.js");
const app = express();
app.use(express.json());
dbConnect();

// user routes
app.use("/user", userRouter);

// post routes
app.use("/post", postRouter);

module.exports = app;
