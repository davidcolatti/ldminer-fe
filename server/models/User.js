const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    uid: String,
    email: String,
    displayName: String,
    photoURL: String,
    indexOfMasterLeads: Number,
    leadsList: [Object],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
