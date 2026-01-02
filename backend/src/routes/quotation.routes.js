const express = require("express");
const router = express.Router();

const {
  createQuotation,
  getAllQuotations,
  updateQuotationStatus,
} = require("../controllers/quotation.controller");

const {
  protect,
  authorizeRoles,
} = require("../middlewares/auth.middleware");

// CREATE QUOTATION
router.post("/", protect, authorizeRoles("admin", "sales"), createQuotation);

// GET QUOTATIONS
router.get("/", protect, getAllQuotations);

// UPDATE STATUS
router.put(
  "/:id/status",
  protect,
  authorizeRoles("admin", "sales"),
  updateQuotationStatus
);

module.exports = router;
