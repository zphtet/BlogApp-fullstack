const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const isLoggedIn = async (req, res, next) => {
  const jwtToken = req.cookies?.jwt;
  if (!jwtToken)
    return res
      .status(400)
      .json({ status: "error", message: "jwt not provided" });
  const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
  const user = await userModel.findOne({ _id: decoded.id });
  if (!user)
    return next(new AppError("You are not allowed to access this route", 404));
  req.user = user;
  next();
};

module.exports = isLoggedIn;
