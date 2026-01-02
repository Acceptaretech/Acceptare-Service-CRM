<<<<<<< HEAD
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
=======
const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
/* Project Progress Chart (Doughnut) */
const projectCtx = document.getElementById('projectChart');

new Chart(projectCtx, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [{
      data: [60, 25, 15],
      backgroundColor: ['#22c55e', '#3b82f6', '#f59e0b']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});

/* Monthly Payments Chart (Bar) */
const paymentCtx = document.getElementById('paymentChart');

new Chart(paymentCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Payments (₹)',
      data: [15000, 10000, 20000, 12000, 18000],
      backgroundColor: '#2563eb'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

>>>>>>> e924d3c2a863dc9be2cec84c16d040c8f1366bd1
