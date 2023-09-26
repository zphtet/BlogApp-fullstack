const express = require("express");
const router = express.Router();
const multer = require("../utils/multer");
const authController = require("../controller/auth.controller");

router.route("/signup").post(multer.uploadProfilePhoto, authController.signUp);

module.exports = router;
