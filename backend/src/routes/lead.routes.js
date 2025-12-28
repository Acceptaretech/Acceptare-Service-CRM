const express = require("express");
const router = express.Router();

const {
  createLead,
  getAllLeads,
  updateLead,
  deleteLead,
} = require("../controllers/lead.controller");

const {
  protect,
  authorizeRoles,
} = require("../middlewares/auth.middleware");

// CREATE LEAD (admin, sales)
router.post("/", protect, authorizeRoles("admin", "sales"), createLead);

// GET ALL LEADS (logged users)
router.get("/", protect, getAllLeads);

// UPDATE LEAD (admin, sales)
router.put("/:id", protect, authorizeRoles("admin", "sales"), updateLead);

// DELETE LEAD (admin only)
router.delete("/:id", protect, authorizeRoles("admin"), deleteLead);

module.exports = router;
