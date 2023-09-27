const express = require("express");
const router = express.Router();
const multer = require("../utils/multer");
const authController = require("../controller/auth.controller");

router.route("/login").post(authController.login);
router.route("/signup").post(multer.uploadProfilePhoto, authController.signUp);
router.route("/deleteallusers").delete(authController.deletAllUsers);
module.exports = router;
