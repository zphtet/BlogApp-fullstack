const addModifiedAt = (req, res, next) => {
  req.body.createdAt = Date.now();
  next();
};

module.exports = addModifiedAt;
