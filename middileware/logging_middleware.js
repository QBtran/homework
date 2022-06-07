function loggingMiddleware(req, res, next) {
  console.log(`New request from ${req.body.username} at ${new Date()}`);
  next();
}

module.exports = loggingMiddleware;
