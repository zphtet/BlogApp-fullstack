const express = require("express");
const postController = require("../controller/post.controller");
const router = express.Router();
const { uploadCoverPhoto } = require("../utils/multer");
const { filterBody } = require("../middleware/filterBody");
const isLoggedIn = require("../middleware/isLoggedIn");
const addAuthorId = require("../middleware/addAuthorId");
const addModifiedAt = require("../middleware/addModifiedAt");
router
  .route("/")
  .get(postController.getAllPosts)
  .post(
    isLoggedIn,
    uploadCoverPhoto,
    addAuthorId,
    // filterBody(["title", "category", "blogData", "photo", "duration"]),
    postController.createPost
  )
  .delete(postController.deletAll);
router.route("/delete/:id").delete(postController.deleteById);

router.route("/getmyposts").get(isLoggedIn, postController.getMyPosts);
router
  .route("/:slug")
  .get(postController.getPostBySlug)
  .patch(
    isLoggedIn,
    uploadCoverPhoto,
    addModifiedAt,
    postController.updatePostBySlug
  );

module.exports = router;
