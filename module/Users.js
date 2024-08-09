const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
});

const UsersModel = mongoose.model("register", UserSchema);
module.exports = UsersModel;
