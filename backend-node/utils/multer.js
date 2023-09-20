const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    const exten = file.mimetype.split("/")[1];
    const uniqueSuffix = Date.now() + "-postId";
    const filename = `${uniqueSuffix}.${exten}`;
    req.filename = filename;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

exports.uploadCoverPhoto = upload.single("photo");
