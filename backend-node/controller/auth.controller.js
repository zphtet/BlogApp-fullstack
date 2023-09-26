const AppError = require("../utils/AppError");
const userModel = require("../model/user.model");
const factory = require("../utils/factory");
// exports.signUp = function (req, res, next) {
//   try {
//   } catch (err) {
//     next(new AppError("Error signing up", 404));
//   }
// };

// exports.signUp = (req, res, next) => {
//   console.log(req.body);
//   try {
//     //     const data = await userModel.create({
//     //       ...req.body
//     //   })
//   } catch (err) {
//     next(new AppError("Error signing up", 404));
//   }
// };

exports.signUp = factory.createDoc(userModel);
