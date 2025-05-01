const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  roll: String,
  year: String,
  degree: String,
  project: String,
  hobbies: String,
  certificate: String,
  internship: String,
  aboutaim: String,
  image: String,
});

module.exports = mongoose.model("Member", memberSchema);
