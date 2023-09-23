const express = require("express");
const postController = require("../controller/post.controller");
const router = express.Router();
const { uploadCoverPhoto } = require("../utils/multer");
const { filterBody } = require("../middleware/filterBody");

router
  .route("/")
  .get(postController.getAllPosts)
  .post(
    uploadCoverPhoto,
    filterBody(["title", "category", "blogData", "photo", "duration"]),
    postController.createPost
  )
  .delete(postController.deletAll);
// router.route("/:id").get(postController.getPostById);
router.route("/:slug").get(postController.getPostBySlug);

module.exports = router;
