const express = require("express");
const app = express();

// using body-parser packes for json data and form data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//sending json data  //skill route
app.use("/skill", (req, res) => {
  // Sending json data with post man

  // reciving json data
  const id = req.body.id;
  const name = req.body.name;
  res.send(`I am json data,My name is ${name}, My id is ${id}`);
});

//sending headers value  //about route
app.use("/about", (req, res) => {
  /**
   * jebabe route peramiter patate huy ==>
   * sending header value with post man
   */
  // reciving headers value
  const id = req.header("id");
  const name = req.header("name");

  res.send(`I am header value,My name is ${name}, My id is ${id}`);
});

// route peramiter //user route
app.use("/user/id/:id/name/:name", (req, res) => {
  /**
   * jebabe route peramiter patate huy
   * /id/87978/name/rejaul
   * /:key/value/key/value
   */

  // reciving route peramiter
  const id = req.params.id;
  const name = req.params.name;

  res.send(`I am route peramiter,My name is ${name}, My id is ${id}`);
});

// Home Route // query peramiter
app.use("/", (req, res) => {
  /**
   * query puery peramiter liker niome
   * sending peramiter
   * ?id=12323 & name=rejsul => ey babe urle likte hube
   */
  //reciving query perameter
  const id = req.query.id;
  const name = req.query.name;

  res.send(`I am query peramiter, My name is ${name}, My id is ${id}`);
});

module.exports = app;
