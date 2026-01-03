const mongoose = require("mongoose");

const followUpSchema = new mongoose.Schema(
  {
    relatedTo: {
      type: String,
      enum: ["Lead", "Client"],
      required: true,
    },

    relatedId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    note: {
      type: String,
      required: true,
    },

    nextFollowUpDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FollowUp", followUpSchema);
