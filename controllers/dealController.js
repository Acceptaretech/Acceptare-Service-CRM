const Deal = require("../models/deals");

// Create New Deal
exports.createDeal = async (req, res) => {
  try {
    const deal = await Deal.create(req.body);
    res.status(201).json(deal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Deals
exports.getDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Stage With Validation
exports.updateStage = async (req, res) => {
  try {
    const { stage } = req.body;

    const allowedStages = [
      "Lead",
      "Contacted",
      "Qualified",
      "Proposal Sent",
      "Negotiation",
      "Won",
      "Lost"
    ];

    if (!allowedStages.includes(stage)) {
      return res.status(400).json({ message: "Invalid stage" });
    }

    const deal = await Deal.findByIdAndUpdate(
      req.params.id,
      { stage },
      { new: true }
    );

    res.json(deal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
