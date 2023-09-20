// server code will goes here.
const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");

// IMPORT ROUTERS
const postRouter = require("./routes/post.route");

// DEFAULT PORT
const port = 3000;

// JSON serialization
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/images"));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("This is my blog app backend endpoint");
});

// Routes

app.use("/api/posts", postRouter);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

async function startServer() {
  try {
    await mongoose.connect(
      "mongodb+srv://zinpainghtetadmin:blogapp215108@cluster0.n0bzo6v.mongodb.net/blogapp?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  } catch (err) {
    console.log("Error Connecting to MongoDB", err);
  }
}

startServer();
