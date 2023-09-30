const AppError = require("../utils/AppError");
const bookmarkModel = require("../model/bookmark.model");
const factory = require("../utils/factory");

exports.createBookmark = factory.createDoc(bookmarkModel);
exports.deleteBookmark = factory.deleteOneById(bookmarkModel);
exports.getBookmark = async (req, res) => {
  const byObj = {
    author: req.body.author,
    post: req.body.post,
  };
  console.log(byObj, "by OBje ");
  try {
    const data = await bookmarkModel.findOne({
      ...byObj,
    });
    return res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Error Fetching bookmark",
    });
  }
};

// exports.getMyBookmarks = async (req, res) => {
//   console.log("working getmybookmarks");
//   const byObj = {
//     author: req.body.author,
//   };
//   try {
//     const data = await bookmarkModel.find({
//       ...byObj,
//     });
//     console.log("from bookmark");
//     console.log(data);
//     return res.status(200).json({
//       status: "success",
//       count: data?.length,
//       data,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       status: "error",
//       message: "Error getting bookmarks",
//     });
//   }
// };

exports.getMyBookmarks = factory.getAll(bookmarkModel, "author", "_id");
