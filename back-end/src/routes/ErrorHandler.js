class ErrorHandler {
  static handle(
    error,
    _req,
    res,
    next,
  ) {
    res.status(500).json({ message: error.message });
    next();
  }
}

module.exports = ErrorHandler;