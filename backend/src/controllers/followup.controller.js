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
  markFollowUpCompleted,
};
