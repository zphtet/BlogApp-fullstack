module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV == "production") {
    return res.status(err.code).json({
      status: "error",
      statusCode: err.code,
      message: err.message,
    });
  }

  return res.status(err.code).json({
    status: "error",
    statusCode: err.code,
    message: err.message,
    stack: err.error?.stack,
  });
};
