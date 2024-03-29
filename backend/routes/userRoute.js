const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  getLoginStatus,
  updateUserDetails,
  updateUserPhoto,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getuser", protect, getUser);
router.get("/getloginstatus", getLoginStatus);
router.patch("/updatedetails", protect, updateUserDetails);
router.patch("/updateuserphoto", protect, updateUserPhoto);

module.exports = router;
