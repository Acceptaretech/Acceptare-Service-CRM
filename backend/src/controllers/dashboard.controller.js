const Invoice = require("../models/Invoice.model");
const Expense = require("../models/Expense.model");

// Helper: month labels
const monthLabels = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

// 🔥 MONTHLY SALES (INVOICE) TREND
const getMonthlySalesTrend = async (req, res) => {
  try {
    const data = await Invoice.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          total: { $sum: "$totalAmount" },
        },
      },
      { $sort: { "_id": 1 } },
    ]);

    const result = monthLabels.map((m, i) => {
      const found = data.find(d => d._id === i + 1);
      return { month: m, value: found ? found.total : 0 };
    });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔥 MONTHLY EXPENSE TREND
const getMonthlyExpenseTrend = async (req, res) => {
  try {
    const data = await Expense.aggregate([
      {
        $group: {
          _id: { $month: "$expenseDate" },
          total: { $sum: "$amount" },
        },
      },
      { $sort: { "_id": 1 } },
    ]);

    const result = monthLabels.map((m, i) => {
      const found = data.find(d => d._id === i + 1);
      return { month: m, value: found ? found.total : 0 };
    });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔥 SALES VS EXPENSE (MONTHLY)
const getSalesVsExpense = async (req, res) => {
  try {
    const sales = await Invoice.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          total: { $sum: "$totalAmount" },
        },
      },
    ]);

    const expenses = await Expense.aggregate([
      {
        $group: {
          _id: { $month: "$expenseDate" },
          total: { $sum: "$amount" },
        },
      },
    ]);

    const result = monthLabels.map((m, i) => {
      const s = sales.find(d => d._id === i + 1);
      const e = expenses.find(d => d._id === i + 1);
      return {
        month: m,
        sales: s ? s.total : 0,
        expense: e ? e.total : 0,
      };
    });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getMonthlySalesTrend,
  getMonthlyExpenseTrend,
  getSalesVsExpense,
};
