const postModel = require("../model/post.model");
const AppError = require("../utils/AppError");
async function createPost(req, res, next) {
  const { title, category, blogData } = req.body;
  try {
    const resp = await postModel.create({
      title,
      photo: req.filename,
      category,
      blogData: JSON.parse(blogData),
      read: req.body.duration,
      published: true,
    });
    return res.status(200).json({
      status: "success",
      data: resp,
    });
  } catch (err) {
    next(new AppError("Error creating document", 500));
  }
}

async function getPostById(req, res, next) {
  const { id } = req.params;
  try {
    const data = await postModel.findById(id);

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(new AppError("Id is not valid", 404));
  }
}

async function deletAll(req, res) {
  try {
    await postModel.deleteMany({});
    return res.status(200).json({
      status: "success",
      data: {},
    });
  } catch (err) {
    console.log("Error deleting doc");
  }
}

module.exports = {
  createPost,
  getPostById,
  deletAll,
};
