exports.filterBody = (filterArr) => {
  return (req, res, next) => {
    // console.log(req.body);
    Object.keys(req.body).forEach((key) => {
      if (!filterArr.includes(key)) {
        delete req.body[key];
      }
    });

    // console.log(req.body, "from middleware");
    next();
  };
};
