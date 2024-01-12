const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;
const bycrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "please kindly provide an email"],
    trim: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minLength: [6, "password must be at least 6 characters"],
    // maxLength: [23, "password must be at most 23 characters"],
  },
  roles: {
    type: String,
    required: true,
    default: "admin",
    enum: ["customer", "admin"],
  },
  photo: {
    type: String,
    required: [true, "please add a photo"],
    default: "https://i.ibb.co/4pDNDk1/avatar.png",
  },
  phone: {
    type: String,
    default: "+234",
  },
  address: {
    type: Object,
    // address, state, country
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  // hash password
  const salt = await bycrypt.genSalt(10);
  const hashedpassword = await bycrypt.hash(this.password, salt);
  this.password = hashedpassword;
  next();
});

module.exports = mongoose.model("Users", userSchema);
