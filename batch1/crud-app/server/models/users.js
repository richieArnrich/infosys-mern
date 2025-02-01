const mongoose = require("mongoose");

// model for users collection
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  contact: String,
});

// export the schema
module.exports = mongoose.model("User", userSchema);
