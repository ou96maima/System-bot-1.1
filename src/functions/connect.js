const mongoose = require("mongoose");
const mongodbURL = process.env.MONGODBURL;

mongoose.connect(mongodbURL, {}).then(() => {
  console.log("connected with database");
});
