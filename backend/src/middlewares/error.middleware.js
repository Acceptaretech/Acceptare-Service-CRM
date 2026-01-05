module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  // Log internal error (server side)
  if (process.env.NODE_ENV !== "production") {
    console.error("🔥 Error:", err.message);
  }

  res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500
        ? "Internal server error"
        : err.message,
  });
};
