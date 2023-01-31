const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/MVCDB");
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
  }
};

module.exports = dbConnect;
