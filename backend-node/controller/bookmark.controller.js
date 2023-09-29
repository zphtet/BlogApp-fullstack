const AppError = require("../utils/AppError");
const bookmarkModel = require("../model/bookmark.model");
const factory = require("../utils/factory");

exports.createBookmark = factory.createDoc(bookmarkModel);
exports.deleteBookmark = factory.deleteOneById(bookmarkModel);

exports.getAllBookmarks = async (req, res) => {
  const data = await bookmarkModel.find({});
  return res.status(200).json({
    status: "success",
    count: data?.length,
    data,
  });
};
