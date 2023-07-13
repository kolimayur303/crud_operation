const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: Number,
  name: String,
  email: String,
  date : { type: Date, default: Date.now},
});

module.exports = mongoose.model("User", userSchema);
