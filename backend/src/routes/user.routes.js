const express = require("express");
const router = express.Router();

const {
  protect,
  authorizeRoles,
} = require("../middlewares/auth.middleware");

// 🔐 Logged-in user profile
router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

// 🔐 Admin only route
router.get(
  "/admin",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin",
    });
  }
);

module.exports = router;
