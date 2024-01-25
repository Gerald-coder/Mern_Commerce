const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;
    // console.log(token);
    if (!token) {
      res.status(401);
      throw new Error("Not authorized due to jwt, please login ");
    }
    // verify jwt
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("verified token is ", verified);
    // get user id from token
    const user = await userModel.findById(verified.id).select("-password");

    if (!user) {
      res.status(401);
      throw new Error("user not found");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, please login");
  }
});

module.exports = { protect };
