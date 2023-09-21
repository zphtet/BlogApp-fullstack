class AppError {
  constructor(message, code) {
    this.message = message;
    this.code = code;
    this.error = new Error(this.message);
  }
}

module.exports = AppError;
