/* eslint-disable */

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

  // const hashedPassword = await bycrypt.hash(password, 10);

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

//login
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // validate user
  if (!email | password) {
    res.status(400);
    throw new Error("please provide the required detials");
  }

  // check if user exits
  const user = await Users.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("user does not exist");
  }

  // check if password ids correct
  const matchPwd = await bycrypt.compare(password, user.password);

  //generate token
  const token = generateToken(user._id);

  if (user && matchPwd) {
    const newUser = await Users.findOne({ email }).select("-password");
    res.cookie("jwtToken", token, {
      path: "/",
      httpOnly: true,
      // sameSite: 'none',
      // secure: true
      expires: new Date(Date.now() + 1000 * 86400),
    });

    res.status(201).json(newUser);
  }
  res.status(400);
  throw new Error("User seems not to be found");
});

// logout

const logout = asyncHandler(async (req, res, next) => {
  res.cookie("jwtToken", "", {
    path: "/",
    httpOnly: true,
    // sameSite: "none",
    // secure: true,
    expires: new Date(0),
  });

  return res.status(200).json({ message: "user is successfully logged out" });
});

// getUser

const getUser = asyncHandler(async (req, res) => {
  //  before you get a user, you need to make sure that the usr is logged in first, if the user is logged in, the nwe can send the full user data to that user
  const user = await Users.findById(req.user._id).select("-password");
  if (!user) {
    res.status(400);
    throw new Error("emy, we no see this person oh");
  }
  res.status(200).json(user);
});

// get login status
const getLoginStatus = asyncHandler(async (req, res) => {
  // const token = req.cookies.jwtToken;
  // return res.send(Boolean(token));
  // my solution of the program below

  const token = req.cookies.jwtToken;
  if (!token) {
    return res.json(false);
  }
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});

//update user details
const updateUserDetails = asyncHandler(async (req, res) => {
  // get user details from client
  const {
    email: newEmail,
    name: newName,
    photo: newPhoto,
    phone: newPhone,
    address: newAddress,
  } = req.body;

  console.log(newAddress, newEmail);
  // find user
  const user = await Users.findOne({ _id: req.user.id });
  // console.log(user);
  //validate user
  if (!user) {
    res.status(400);
    throw new Error("this user no dey around ohh");
  }
  // update user
  // get existing user details
  const { email, name, phone, address } = user;
  user.email = newEmail ? newEmail : email;
  user.name = newName ? newName : name;
  user.phone = newPhone ? newPhone : phone;
  user.address = newAddress ? newAddress : address;

  const newUser = await user.save();
  res.status(200).json(newUser);
});

// updateUserPhoto
const updateUserPhoto = asyncHandler(async (req, res) => {
  const { photo: userPhoto } = req.body;

  const user = await Users.findOne({ _id: req.user.id });
  if (!user) {
    res.status(400);
    throw new Error("User not found, cant update profile photo");
  }
  const { photo } = user;
  user.photo = photo ? userPhoto : photo;
  const updateUserPhoto = await user.save();
  res.status(200).json(updateUserPhoto);
});
module.exports = {
  registerUser,
  loginUser,
  logout,
  getUser,
  getLoginStatus,
  updateUserDetails,
  updateUserPhoto,
};
