const multer = require("multer");

const uploadSinglePhoto = (name, prefix) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/");
    },
    filename: function (req, file, cb) {
      const exten = file.mimetype.split("/")[1];
      const uniqueSuffix = Date.now() + "-postId";
      const filename = prefix
        ? `${prefix}-${Date.now()}.${exten}`
        : `${uniqueSuffix}.${exten}`;
      req.body[name] = filename;
      cb(null, filename);
    },
  });

  const upload = multer({ storage: storage });
  return upload.single(name);
};

exports.uploadCoverPhoto = uploadSinglePhoto("photo");

exports.uploadProfilePhoto = uploadSinglePhoto("profile", "author");
