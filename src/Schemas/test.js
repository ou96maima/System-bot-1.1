const { model, Schema } = require("mongoose");

let test = new Schema({
  Guild: String,
  UserId: String,
  Message: String,
});

module.exports = model("testSchema", test);
