const erroeHaldleMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(400).send("authication error");
};

module.exports = erroeHaldleMiddleware;
