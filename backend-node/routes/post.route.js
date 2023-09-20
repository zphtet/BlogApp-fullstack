const express = require("express");
const postController = require("../controller/post.controller");
const router = express.Router();
const { uploadCoverPhoto } = require("../utils/multer");

router.get("/", function (req, res) {
  res.status(200).json({
    status: "success",
    data: "No data right now",
  });
});

router
  .route("/")
  .post(uploadCoverPhoto, postController.createPost)
  .delete(postController.deletAll);
router.route("/:id").get(postController.getPostById);

module.exports = router;
