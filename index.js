const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const leadRoutes = require("./routes/leadroutes");
const app = express();
app.use(express.json());
app.use("/api/leads", leadRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server started on port 5000"));
  })
  .catch((err) => console.log(err));
