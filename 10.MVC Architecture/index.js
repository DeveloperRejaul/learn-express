const app = require("./app.js");
require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send({ message: "server is ok" }));
app.use((req, res, next) => res.send({ message: "bad url" }));
app.use((err, req, res, next) => res.send({ message: "other error" }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
