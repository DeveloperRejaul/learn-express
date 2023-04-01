const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.post("/", (req, res) => {
  const { name, email, password, confirmPassword, phonenumber } = req.body;

  res.status(200).send({
    message: "done",
    data: {},
  });
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
