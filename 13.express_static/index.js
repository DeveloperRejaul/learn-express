const express = require("express");
const port = 3000;
const web = require("./routes/web.js");
const app = express();
const { join } = require("path");

// stape : 01
// use express.static middiweler
// app.use(express.static( "phat", "public", "potion"));
const option = {
  dotfiles: "ignore", //ignore || allow || deny
  etag: false,
  extensions: ["htm", "html"],
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};

// Way 01
// app.use(express.static("13.express_static/public")); // beasic uses : way 01

// Way 02
// app.use(express.static(join(process.cwd(), "13.express_static/public"))); //  beasic uses , its good way: way 02 //work and using pattren same // one difrence just return join mathod => path
// console.log(join(process.cwd(), "13.express_static/public")); // return this path: D:\Learn Programming\Development challenge\Stape 02 (Server)\02_Express_js\learn-express\13.express_static\public

// way 03 using vartual path  // file link kurar somuy path er samne "every/" ta dite hube
// app.use("/every",express.static(join(process.cwd(), "13.express_static/public")));

// way 04 : static in spasipic fulder
// app.use(express.static(join(process.cwd(), "13.express_static/public/css")));
// app.use("/css",express.static(join(process.cwd(), "13.express_static/public/css")));

// way 05 . useing dot "." file
// app.use(express.static(join(process.cwd(), "13.express_static/public/"), {dotfiles: "allow"}));
app.use(
  express.static(join(process.cwd(), "13.express_static/public/"), option)
);

// using router
app.use("/", web);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
