// server code will goes here.
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const globalErrorHandler = require("./utils/globalError");

// IMPORT ROUTERS
const postRouter = require("./routes/post.route");
const authRouter = require("./routes/auth.route");

// DEFAULT PORT
const port = 3000;

// env tile
require("dotenv").config();
// JSON serialization
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

app.use(express.static(__dirname + "/images"));
app.use(helmet());

console.log(process.env.NODE_ENV);

app.use((req, res, next) => {
  // console.log(req.url);
  console.log("req cookies");
  console.log(req.cookies);
  next();
});

app.get("/", (req, res) => {
  res.cookie("cookieName", "cookieValue", {
    maxAge: 60600746,
  });
  res.send("This is my blog app backend endpoint");
});

// Routes

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
