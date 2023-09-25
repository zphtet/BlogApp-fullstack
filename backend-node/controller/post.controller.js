const postModel = require("../model/post.model");
const AppError = require("../utils/AppError");
const {
  getOneById,
  createDoc,
  getAll,
  getOneBySlug,
  updateOneBySlug,
} = require("../utils/factory");

async function deletAll(req, res) {
  try {
    await postModel.deleteMany({});
    return res.status(200).json({
      status: "success",
      data: {},
    });
  } catch (err) {
    next(new AppError("Error deleting"));
  }
}

const getPostById = getOneById(postModel);
const createPost = createDoc(postModel, "blogData");
const getAllPosts = getAll(postModel);
const getPostBySlug = getOneBySlug(postModel);
const updatePostBySlug = updateOneBySlug(postModel, "blogData");
module.exports = {
  createPost,
  getPostById,
  deletAll,
  getAllPosts,
  getPostBySlug,
  updatePostBySlug,
};
