const jwt = require("jsonwebtoken");

const authRouteMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  const decoded = jwt.verify(token, "MY_Secret_KEY");
  const { name, email } = decoded;

  if ((name & email) !== "") {
    req.name = name;
    req.email = email;
    next();
  } else {
    next("somthing wrong");
  }
};

module.exports = { authRouteMiddleware };
