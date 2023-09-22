const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 10,
  },
  photo: { type: String },
  category: { type: String, required: true },
  blogData: {
    type: {},
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  duration: {
    type: Number || String,
  },
  editedAt: { type: Date, default: Date.now() },
  // author: { type: mongoose.Schema.ObjectId, required: true },
  published: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
});

// Export Model
const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
