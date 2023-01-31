const express = require("express");
const app = express();
const port = 3000;
// =====================================================================================================
/**
 * Middleware is a simple funcion , jar modde (err, res, req, next) 4 ta paramiter take
 */
// middleware : type :01
// disciption: eyta jey kane call kura hube sekane bebohar kura jabe sodo

const middleware = (res, req, next) => {
  console.log("I am middleware funtion type1");
  // ekane judi next fnction call na kura porjunto , poroborti midolware golo run hube na
  next();
};

// =====================================================================================================
// middleware : type :02
// disciption: judi app.use(middleware2) eyba diye di tayle sob jaygay ayta call hube
const middleware2 = (res, req, next) => {
  console.log("I am middleware funtion type2");
  // ekane judi next fnction call na kura porjunto , poroborti midolware golo run hube na
  next();
};
app.use(middleware2);

// =====================================================================================================
// middleware : type :05
// satatic middleware
// Example:
app.use(express.static("public"));
app.get("/StaticMiddleWare", (req, res) => {
  res.sendFile(__dirname + "/app.html");
});

// ======================================================================================================
app.get("/", middleware, (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// ======================================================================================================

// =====================================================================================================
// middleware : type :03
// router lable middleware
// Router().use(middleware)
// Router().mathod(middleware)

// =====================================================================================================
// middleware : type :04
// error handeling middelware
// Example:
app.use((req, res, next) => {
  res.send("bad url");
});
app.use((error, req, res, next) => {
  res.send(" other error");
});
