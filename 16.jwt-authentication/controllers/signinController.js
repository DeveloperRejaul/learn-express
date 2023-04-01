const jwt = require("jsonwebtoken");
const User = require("../model/userSchema.js");
const bcrypt = require("bcrypt");

const signinController = async (req, res) => {
  const { name, email, password } = req.body;

  // password bcrypting
  const bcryptedPassword = await bcrypt.hash(password, 10);

  // ganarating tocken with name and , email
  const token = jwt.sign(
    {
      name: name,
      email: email,
    },
    "MY_Secret_KEY",
    { expiresIn: "1h" }
  );

  const user = await User.create({
    name,
    email,
    password: bcryptedPassword,
    token: token,
  });

  res.status(200).send({ user });
};

module.exports = { signinController };
