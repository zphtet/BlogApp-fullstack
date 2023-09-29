const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "posts",
  },
  savedAt: {
    type: Date,
    default: new Date(Date.now()),
  },
});

// Document Middleware

bookmarkSchema.index({ author: 1, post: 1 }, { unique: true });

bookmarkSchema.pre(/^find/, async function (next) {
  this.populate({
    path: "author",
  });
  next();
});

bookmarkSchema.pre(/^find/, async function (next) {
  this.populate({
    path: "post",
  });
  next();
});
// Export Model
const bookmarkModel = mongoose.model("bookmarks", bookmarkSchema);
module.exports = bookmarkModel;
