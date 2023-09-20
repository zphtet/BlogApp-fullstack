const postModel = require("../model/post.model");

async function createPost(req, res) {
  const { title, category, blogData } = req.body;
  // console.log("req body", req.body);
  // console.log("req file", req.filename);
  // console.log("blog Data", JSON.parse(blogData));

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
    console.log("🌋 Error Creating Post Doc", err);
  }
}

async function getPostById(req, res) {
  const { id } = req.params;
  console.log("post id", id);
  try {
    const data = await postModel.findById(id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log("Error geeting doc");
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
