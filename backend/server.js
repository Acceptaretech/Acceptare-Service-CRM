const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./src/config/db");
const errorHandler = require("./src/middlewares/error.middleware");

app.use(express.json());

app.use("/api/auth", require("./src/routes/auth.routes"));
app.use("/api/clients", require("./src/routes/client.routes"));
app.use("/api/leads", require("./src/routes/lead.routes"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Connect to database then start server
connectDB().catch((err) => {
  console.log("Continuing without database...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
