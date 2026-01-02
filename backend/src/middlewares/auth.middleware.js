const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

// TOKEN CHECK MIDDLEWARE
const protect = async (req, res, next) => {
  try {
    let token;

    // Header se token nikalna
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token missing, login required",
      });
    }

    // Token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // User DB se nikalna
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user; // 🔥 IMPORTANT LINE
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

// ROLE CHECK MIDDLEWARE
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access denied for role: ${req.user.role}`,
      });
    }
    next();
  };
};

module.exports = { protect, authorizeRoles };
