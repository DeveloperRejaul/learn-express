const router = require("express").Router();

/**
 * @Title : http response
 */

router.get("/", (req, res) => {
  res.send("i am user home route");
});

// sending json file
// router.get("/login", (req, res) => {
//   res.status(201).json({
//     message: "i am login Page",
//     statusCode: 200,
//   });
// });

// response redirect
router.get("/login", (req, res) => {
  res.redirect("/user");
});

module.exports = router;
