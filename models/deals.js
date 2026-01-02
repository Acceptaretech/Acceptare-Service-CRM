const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  amount: { type: Number, required: true },
  stage: {
    type: String,
    enum: [
      "Lead",
      "Contacted",
      "Qualified",
      "Proposal Sent",
      "Negotiation",
      "Won",
      "Lost"
    ],
    default: "Lead"
  }
}, { timestamps: true });

module.exports = mongoose.model("Deal", dealSchema);
