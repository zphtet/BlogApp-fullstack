const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    unique: [true, "email must be unique"],
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  confirmPassword: {
    type: "string",
    required: true,
    validate: {
      validator: function (value) {
        return value == this.password;
      },
      message: "Password does not match",
    },
  },
  profile: {
    type: "string",
    default: "default.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // changedAt: {
  //   type: Date,
  // },
});

// Document Middleware
// postSchema.pre("save", function (next) {
//   this.slug = this.title.toLowerCase().split(" ").join("-");
//   next();
// });

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, +process.env.SALT_ROUNDS);
  this.confirmPassword = null;
  next();
});

// Export Model
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
