const addAuthorId = (req, res, next) => {
  req.body.author = req.user._id;
  // console.log(req.body.author, "author id");
  next();
};

module.exports = addAuthorId;
