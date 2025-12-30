const express = require("express");
const router = express.Router();

const {
  createFollowUp,
  getAllFollowUps,
  markFollowUpCompleted,
} = require("../controllers/followup.controller");

const { protect } = require("../middlewares/auth.middleware");

// CREATE FOLLOW-UP
router.post("/", protect, createFollowUp);

// GET ALL FOLLOW-UPS
router.get("/", protect, getAllFollowUps);

// MARK FOLLOW-UP COMPLETED
router.put("/:id/complete", protect, markFollowUpCompleted);

module.exports = router;
