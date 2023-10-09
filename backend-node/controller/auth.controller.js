const AppError = require("../utils/AppError");
const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJWT = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const sendResWithJwt = async (user, statusCode, res) => {
  const jwt = await generateJWT(user._id);
  console.log("jwt ", jwt);

  const cookieOptions = {
    // expires: new Date(Date.now() + ),
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    // domain: "http://localhost:5173",
    // path: "/*",
  };
  // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  // res.header("Access-Control-Allow-Credentials", "true");
  res.cookie("jwt", jwt, cookieOptions);
  console.log("cookie created successfully");
  // res.cookie("jwt", "thisisjwttoken");

  return res.status(statusCode).json({
    status: "success",
    jwt,
    data: user,
  });
};

exports.deletAllUsers = async (req, res, next) => {
  try {
    await userModel.deleteMany({});
    return res.status(200).json({
      status: "success",
      data: {},
    });
  } catch (err) {
    next(new AppError("Error deleting"));
  }
};

exports.signUp = async (req, res, next) => {
  const createObj = {
    ...req.body,
  };
  console.log(createObj);
  try {
    const user = await userModel.create(createObj);
    console.log("signup");
    console.log(user);
    user.password = null;
    user.confirmPassword = null;

    sendResWithJwt(user, 201, res);
  } catch (err) {
    next(new AppError("Error creating document", 500));
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await userModel.findOne({ email: email });
    console.log(user);
    if (!user || user === null)
      return next(new AppError("User not found", 404));
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) return next(new AppError("Incorrect password", 404));

    user.password = null;
    user.confirmPassword = null;

    sendResWithJwt(user, 200, res);
  } catch (e) {
    return next(new AppError("Error Loggin ", 500));
  }
};

exports.logout = async (req, res, next) => {
  res.clearCookie("jwt");
  return res.status(200).json({
    status: "success",
  });
};

exports.sendUserLoggedIn = async (req, res, next) => {
  return res.status(200).json({
    status: "success",
    data: req.user,
  });
};
