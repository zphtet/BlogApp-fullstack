const AppError = require("./AppError");

exports.getOneById = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Model.findById(id);
      res.status(200).json({
        status: "success",
        data,
      });
    } catch (err) {
      next(new AppError("Id is not valid", 404));
    }
  };
};

exports.createDoc = (Model, parse) => {
  return async (req, res, next) => {
    const createObj = {
      ...req.body,
    };

    if (parse) {
      createObj[parse] = JSON.parse(createObj[parse]);
    }
    try {
      const resp = await Model.create(createObj);
      return res.status(200).json({
        status: "success",
        data: resp,
      });
    } catch (err) {
      next(new AppError("Error creating document", 500));
    }
  };
};
