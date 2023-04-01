const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();

// middleware Lavle
// 01. app lavle middelware
// 02. roter lavle middleware
// 03. error handeling middleware
// 04. bildiig middleware
// 05. tartparty middleware
// middileware chaining
// sending data to next middleware
// trow error with next mathod

// ===============================================================================
// example bildiig middleware
app.use("/router", router);
app.use(express.json());

// ===============================================================================
// example tartparty middleware
// app.use(cociperser());

// ===============================================================================
// example rror handeling middleware

app.get("/trowError", (req, res) => {
  throw new Error("somthing wrong");
  // res.send("Hello World!");
});

const errorHandalingMiddleware = (error, req, res, next) => {
  //   console.log(error.message);
  res.send("I'm from error handleing middleware");
};
app.use(errorHandalingMiddleware);

// ===============================================================================
// example App lavle middleware
const logMiddleware = (req, res, next) => {
  console.log("I'm app lavle middileware");
  next();
};
app.use(logMiddleware); // using app lavle middileware
app.get("/app", (req, res) => res.send("Hello World!"));

// ===============================================================================
// example router lavle middileware
const routerMiddleware = (req, res, next) => {
  console.log("I'm Router lavle middleware");
  next();
};
router.use(routerMiddleware);
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// ===============================================================================
// example  middileware chaining
const middelware1 = (req, res, next) => {
  console.log("I'm middleware 01");
  next();
};
const middelware2 = (req, res, next) => {
  console.log("I'm middleware 02");
  next();
};
const middelware3 = (req, res, next) => {
  console.log("I'm middleware 03");
  next();
};
const middelware4 = (req, res, next) => {
  console.log("I'm middleware 04");
  next();
};

app.get(
  "/chaining",
  middelware1,
  middelware2,
  middelware3,
  middelware4,
  (req, res) => {
    res.send("hello world");
  }
);

// ===============================================================================
// sending data to next middleware
const dataSentMiddlware = (req, res, next) => {
  req.user1 = "Kamal Mia";
  next();
};

const reciveDataMiddaleware = (req, res, next) => {
  req.user2 = "Jamal Mia";
  next();
};

app.get("/dataGetSet", dataSentMiddlware, reciveDataMiddaleware, (req, res) => {
  res.send(
    `Name01 :${req.user1} from middleware 01, /n   Name 02 :${req.user2} from middleware 02`
  );
});

// ===============================================================================
// trow error with next mathod
const errorMiddaleware = (req, res, next) => {
  next("this error from next method");
};
app.get("/trowErrorWithNextMethod", errorMiddaleware, (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
