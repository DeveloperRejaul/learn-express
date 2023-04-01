const { join } = require("path");

const homeController = (req, res) => {
  res.sendFile(join(process.cwd(), "13.express_static/views", "index.html"));
};

module.exports = homeController;
