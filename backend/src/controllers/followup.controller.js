const FollowUp = require("../models/FollowUp.model");

// CREATE FOLLOW-UP
const createFollowUp = async (req, res) => {
  try {
    const followUp = await FollowUp.create({
      ...req.body,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Follow-up created successfully",
      data: followUp,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL FOLLOW-UPS
const getAllFollowUps = async (req, res) => {
  try {
    const followUps = await FollowUp.find()
      .populate("assignedTo", "name email")
      .sort({ nextFollowUpDate: 1 });

    res.status(200).json({
      success: true,
      data: followUps,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔥 GET TODAY FOLLOW-UPS
const getTodayFollowUps = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const followUps = await FollowUp.find({
      nextFollowUpDate: { $gte: today, $lt: tomorrow },
      status: "pending",
    });

    res.status(200).json({
      success: true,
      data: followUps,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔥 GET OVERDUE FOLLOW-UPS
const getOverdueFollowUps = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const followUps = await FollowUp.find({
      nextFollowUpDate: { $lt: today },
      status: "pending",
    });

    res.status(200).json({
      success: true,
      data: followUps,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// MARK FOLLOW-UP COMPLETED
const markFollowUpCompleted = async (req, res) => {
  try {
    const followUp = await FollowUp.findById(req.params.id);

    if (!followUp) {
      return res
        .status(404)
        .json({ success: false, message: "Follow-up not found" });
    }

    followUp.status = "completed";
    await followUp.save();

    res.status(200).json({
      success: true,
      message: "Follow-up marked as completed",
      data: followUp,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createFollowUp,
  getAllFollowUps,
  getTodayFollowUps,
  getOverdueFollowUps,
  markFollowUpCompleted,
};
