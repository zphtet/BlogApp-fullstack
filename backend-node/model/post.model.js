const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 10,
    unique: true,
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
  slug: {
    type: String,
  },
  author: {
    type: mongoose.ObjectId,
    ref: "users",
  },
});

// Document Middleware
postSchema.pre("save", function (next) {
  this.slug = this.title.toLowerCase().split(" ").join("-");
  next();
});

// Export Model
const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
