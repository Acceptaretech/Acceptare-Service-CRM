const express = require("express");
const router = express.Router();

const {
  createFollowUp,
  getAllFollowUps,
  getTodayFollowUps,
  getOverdueFollowUps,
  markFollowUpCompleted,
} = require("../controllers/followup.controller");

const { protect } = require("../middlewares/auth.middleware");

// CREATE FOLLOW-UP
router.post("/", protect, createFollowUp);

// GET ALL FOLLOW-UPS
router.get("/", protect, getAllFollowUps);

// GET TODAY FOLLOW-UPS
router.get("/today", protect, getTodayFollowUps);

// GET OVERDUE FOLLOW-UPS
router.get("/overdue", protect, getOverdueFollowUps);

// COMPLETE FOLLOW-UP
router.put("/:id/complete", protect, markFollowUpCompleted);

module.exports = router;
