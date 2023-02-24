const { Schema, model } = require("mongoose");

const Admin = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: Boolean,
});

module.exports = model("Admin", Admin);
