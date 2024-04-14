const { model, Schema } = require("mongoose");

let welcomeSchema = new Schema({
  Guild: String,
  Enabled: Boolean,
  DM: Boolean,
});

module.exports = model("welcomeSchema", welcomeSchema);
