const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res, next) => {
  res.send("registered a new user");
});

module.exports = { registerUser };
