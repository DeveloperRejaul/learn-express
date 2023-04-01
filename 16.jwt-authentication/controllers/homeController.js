const User = require("../model/userSchema.js");
const bcrypt = require("bcrypt");

const homeController = async (req, res) => {
  res.status(200).send({ message: "wellcome to home page" });
};

module.exports = { homeController };
