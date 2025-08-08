const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
