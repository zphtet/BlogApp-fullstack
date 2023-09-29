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

    console.log(createObj, "from create");

    if (parse) {
      createObj[parse] = JSON.parse(createObj[parse]);
    }
    try {
      const resp = await Model.create(createObj);
      console.log("creation successful");
      return res.status(201).json({
        status: "success",
        data: resp,
      });
    } catch (err) {
      next(new AppError("Error creating document", 500));
    }
  };
};

exports.getAll = (Model, populate, queryBy) => {
  return async (req, res, next) => {
    let query = {};
    if (queryBy) query.author = req.user[queryBy];
    // console.log(req.query);
    console.log({ published: true, ...query });
    const limit = 5;
    const pageNum = req.query.page || 0;
    const skipValue = (pageNum - 1) * limit > 0 ? (pageNum - 1) * limit : 0;
    try {
      const data = await Model.find({ published: true, ...query })
        .populate(populate)
        .sort({ createdAt: "desc", _id: 1 })
        .skip(skipValue)
        .limit(limit);

      return res.status(200).json({
        status: "success",
        count: data.length,
        data,
      });
    } catch (err) {
      next(new AppError("Error fetching posts", err));
    }
  };
};

exports.getOneBySlug = (Model, populate) => {
  return async (req, res, next) => {
    try {
      const data = await Model.findOne({ slug: req.params.slug }).populate(
        populate
      );
      return res.status(200).json({
        status: "success",
        data,
      });
    } catch (err) {
      next(new AppError("Error Fetching document By Slug"));
    }
  };
};

exports.updateOneBySlug = (Model, parse) => {
  return async (req, res, next) => {
    const slug = req.body.title.toLowerCase().split(" ").join("-");
    try {
      const updateObj = {
        ...req.body,
        slug,
      };

      if (parse) {
        updateObj[parse] = JSON.parse(updateObj[parse]);
      }

      const data = await Model.updateOne(
        { slug: req.params.slug },
        { ...updateObj }
      );
      return res.status(200).json({
        status: "success",
        data,
      });
    } catch (err) {
      next(new AppError("Error Updationg Documnet"));
    }
  };
};

exports.deleteOneById = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Model.deleteOne({ _id: id });
      return res.status(200).json({
        status: "success",
        data,
      });
    } catch (err) {
      return next(new AppError("Delete failed: " + err.message));
    }
  };
};
