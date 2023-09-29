// import { ObjectId } from "mongodb";
const { ObjectId } = require("mongodb");
const convertStringToId = (req, res, next) => {
  req.body.post = new ObjectId(req.body.post);

  next();
};

module.exports = convertStringToId;
