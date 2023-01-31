const Users = require("../../models/model.users.js");

const postUserController = async (req, res) => {
  const newUser = await new Users({
    name: "rejaul",
    email: "reja@gmail.com",
  });
  await newUser.save();
  res.send({ message: "save new user", data: newUser });
};

module.exports = postUserController;
