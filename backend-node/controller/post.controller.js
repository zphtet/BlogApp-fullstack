const postModel = require("../model/post.model");
const AppError = require("../utils/AppError");
const { getOneById, createDoc } = require("../utils/factory");
// async function createPost(req, res, next) {
//   const { title, category, blogData, duration, photo } = req.body;
//   try {
//     const resp = await postModel.create({
//       title,
//       photo,
//       category,
//       blogData: JSON.parse(blogData),
//       duration,
//     });
//     return res.status(200).json({
//       status: "success",
//       data: resp,
//     });
//   } catch (err) {
//     next(new AppError("Error creating document", 500));
//   }
// }

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

async function getAllPosts(req, res, next) {
  console.log(req.query);
  const limit = 3;
  const pageNum = req.query.page || 0;
  try {
    const data = await postModel
      .find({ published: true })
      .sort({ createdAt: "desc", _id: 1 })
      .skip((pageNum - 1) * limit)
      .limit(limit);

    // .skip(3)
    // .limit(3);

    return res.status(200).json({
      status: "success",
      count: data.length,
      data,
    });
  } catch (err) {
    next(new AppError("Error fetching posts", err));
  }
}

const getPostById = getOneById(postModel);
const createPost = createDoc(postModel, "blogData");

module.exports = {
  createPost,
  getPostById,
  deletAll,
  getAllPosts,
};
