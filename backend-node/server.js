// server code will goes here.
const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const globalErrorHandler = require("./utils/globalError");
const cookieParser = require("cookie-parser");

// IMPORT ROUTERS
const postRouter = require("./routes/post.route");
const authRouter = require("./routes/auth.route");

// DEFAULT PORT
const port = 3000;

// env tile
require("dotenv").config();
// JSON serialization
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/images"));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("This is my blog app backend endpoint");
});

// Routes

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.get("/err", (req, res) => {
  throw new Error("Error Occured");
});

// Gloabl error handler
app.use(globalErrorHandler);

async function startServer() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.n0bzo6v.mongodb.net/blogapp?retryWrites=true&w=majority`
    );
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`app listening on port http://localhost:${port}`);
    });
  } catch (err) {
    console.log("Error Connecting to MongoDB", err);
  }
}

startServer();
