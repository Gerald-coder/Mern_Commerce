const asyncHandler = require("express-async-handler");
const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please fill in the required details");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("password should be above 6 characters");
  }
  // check if users exists
  const userExists = await Users.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  const hashedPassword = await bycrypt.hash(password, 10);

  // validate user
  const user = await Users.create({ name, email, password });
  console.log(user);
  //   res.status(201).json({ success: `new user ${user} created` });

  // generate token
  const token = generateToken(user._id);
  if (user) {
    const { _id, name, email, role } = user;
    res.cookie("jwtToken", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      //   sameSite: "none",
      //   secure: true,
    });
    res.status(201).json({ _id, name, email, role, token });
  } else {
    res.status(400);
    throw new Error("invalid user 😥");
  }
});

module.exports = { registerUser };
