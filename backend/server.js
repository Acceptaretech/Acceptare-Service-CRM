const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");

const connectDB = require("./src/config/db");
const checkEnv = require("./src/config/envCheck");

const errorHandler = require("./src/middlewares/error.middleware");
const { apiLimiter } = require("./src/middlewares/rateLimit.middleware");
const { auditLogger } = require("./src/middlewares/audit.middleware");

const amcReminderJob = require("./src/utils/amcReminder.service");
const { startAutomationCron } = require("./src/utils/automationCron.service");

// =======================
// 🔐 SECURITY MIDDLEWARE
// =======================
app.use(helmet());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(apiLimiter);
app.use(auditLogger);

// =======================
// ROUTES
// =======================
app.use("/api/auth", require("./src/routes/auth.routes"));
app.use("/api/users", require("./src/routes/user.routes"));
app.use("/api/clients", require("./src/routes/client.routes"));
app.use("/api/leads", require("./src/routes/lead.routes"));
app.use("/api/quotations", require("./src/routes/quotation.routes"));
app.use("/api/invoices", require("./src/routes/invoice.routes"));
app.use("/api/amcs", require("./src/routes/amc.routes"));
app.use("/api/followups", require("./src/routes/followup.routes"));
app.use("/api/expenses", require("./src/routes/expense.routes"));
app.use("/api/dashboard", require("./src/routes/dashboard.routes"));
app.use("/api/automation-rules", require("./src/routes/automation.routes"));
app.use("/api/client-auth", require("./src/routes/clientAuth.routes"));
app.use("/api/client-portal", require("./src/routes/clientPortal.routes"));
app.use("/api/integrations", require("./src/routes/integration.routes"));
app.use("/api/payments", require("./src/routes/payment.routes"));

// =======================
// ERROR HANDLER (LAST)
// =======================
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// =======================
// 🔥 START SERVER
// =======================
const startServer = async () => {
  try {
    // 🔐 ENV SAFETY CHECK (IMPORTANT)
    checkEnv();

    // 🗄️ DB CONNECT
    await connectDB();
    console.log("Database connected successfully");

    // ⏱️ CRON JOBS
    startAutomationCron();
    amcReminderJob();

    // 🚀 SERVER START
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
