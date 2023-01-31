const express = require("express");
const multer = require("multer");
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "11.Upload_file_image_video/uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
const upload = multer({ storage: storage });

app.post("/profile", upload.single("avatar"), function (req, res, next) {
  console.log(req.file, req.body);
  res.send("file is uploaded");
});

app.get("/profile", function (req, res) {
  res.sendFile(__dirname + "/app.html");
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
