const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).json({
    status: "success",
    data: "No data right now",
  });
});

module.exports = router;
