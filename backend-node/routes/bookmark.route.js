const express = require("express");
const router = express.Router();
const bookmarkController = require("../controller/bookmark.controller");
const isLoggedIn = require("../middleware/isLoggedIn");
const addAuthorId = require("../middleware/addAuthorId");
const convertStringToId = require("../middleware/convertStringToId");
router
  .route("/")
  .post(
    convertStringToId,
    (req, res, next) => {
      console.log("req.body", req.body);
      next();
    },
    isLoggedIn,
    addAuthorId,
    bookmarkController.createBookmark
  )
  .get(bookmarkController.getAllBookmarks);
router.route("/:id").delete(isLoggedIn, bookmarkController.deleteBookmark);

module.exports = router;
