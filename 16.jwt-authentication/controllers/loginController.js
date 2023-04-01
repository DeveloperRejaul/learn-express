const User = require("../model/userSchema.js");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  // chack password is valid
  const isValitPassword = await bcrypt.compare(password, user.password);

  if (isValitPassword) {
    res.json({ token: user.token });
  } else {
    res.json({ message: "atuhencation faild" });
  }
};

module.exports = { loginController };
