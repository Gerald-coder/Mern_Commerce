const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: `gerry😥 ${err.message}`,
    stack: process.env.NODE_ENV === "development" ? err.stack : null, // to avoid sending error stack to users in production
  });
  next();
};

module.exports = errorHandler;
