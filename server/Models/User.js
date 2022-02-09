const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  street: {type: String, required: true},
  country: {type: String, required: true},
  postalCode: {type: Number, required: true},
});

const userSchema = new mongoose.Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number},
    address: addressSchema,
    gender: {type: String, required: false, unique: false},
    age: {type: Number, required: false, unique: false},
    isAdmin: {type: Boolean, required: false, default: false},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
