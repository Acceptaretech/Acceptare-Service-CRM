const AuditLog = require("../models/AuditLog.model");

const auditLogger = async (req, res, next) => {
  res.on("finish", async () => {
    try {
      if (req.user) {
        await AuditLog.create({
          userId: req.user._id,
          action: res.statusCode < 400 ? "SUCCESS" : "FAILED",
          module: req.originalUrl,
          method: req.method,
          ipAddress: req.ip,
        });
      }
    } catch (error) {
      console.error("Audit log failed:", error.message);
    }
  });

  next();
};

module.exports = { auditLogger };
