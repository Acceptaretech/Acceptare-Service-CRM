const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const { successResponse } = require("../utils/response");

const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    successResponse(res, "User registered successfully", {
      id: user._id,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw { statusCode: 401, message: "Invalid credentials" };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw { statusCode: 401, message: "Invalid credentials" };
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    successResponse(res, "Login successful", { token });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
