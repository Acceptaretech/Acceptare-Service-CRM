const express = require("express");
const router = express.Router();

const {
  getDashboardSummary,
  getMonthlySalesTrend,
  getMonthlyExpenseTrend,
  getSalesVsExpense,
} = require("../controllers/dashboard.controller");

const { protect } = require("../middlewares/auth.middleware");
// SUMMARY
router.get("/summary", protect, getDashboardSummary);

// CHART DATA
router.get("/charts/sales", protect, getMonthlySalesTrend);
router.get("/charts/expenses", protect, getMonthlyExpenseTrend);
router.get("/charts/sales-vs-expense", protect, getSalesVsExpense);

module.exports = router;
