const express = require("express");
const router = express.Router();

const {
  getMonthlySalesTrend,
  getMonthlyExpenseTrend,
  getSalesVsExpense,
} = require("../controllers/dashboard.controller");

const { protect } = require("../middlewares/auth.middleware");

// CHART DATA
router.get("/charts/sales", protect, getMonthlySalesTrend);
router.get("/charts/expenses", protect, getMonthlyExpenseTrend);
router.get("/charts/sales-vs-expense", protect, getSalesVsExpense);

module.exports = router;
