const express = require("express");
const router = express.Router();
const bookmarkController = require("../controller/bookmark.controller");
const isLoggedIn = require("../middleware/isLoggedIn");
const addAuthorId = require("../middleware/addAuthorId");
const convertStringToId = require("../middleware/convertStringToId");
const bookmarkModel = require("../model/bookmark.model");
const { ObjectId } = require("mongodb");
router.route("/").delete(async (req, res) => {
  try {
    await bookmarkModel.deleteMany({});
    return res.status(200).json({
      status: "success",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
    });
  }
});

router
  .route("/")
  .post(
    convertStringToId,
    isLoggedIn,
    addAuthorId,
    bookmarkController.createBookmark
  );

router
  .route("/getmybookmarks")
  .get(isLoggedIn, bookmarkController.getMyBookmarks);

router
  .route("/:id")
  .delete(isLoggedIn, bookmarkController.deleteBookmark)
  .post(bookmarkController.getBookmark);

module.exports = router;
