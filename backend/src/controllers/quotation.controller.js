const Quotation = require("../models/Quotation.model");

// CREATE QUOTATION
const createQuotation = async (req, res) => {
  try {
    const { items, gstPercent = 18 } = req.body;

    let subTotal = 0;
    items.forEach((item) => {
      subTotal += item.quantity * item.price;
    });

    const gstAmount = (subTotal * gstPercent) / 100;
    const totalAmount = subTotal + gstAmount;

    const quotation = await Quotation.create({
      ...req.body,
      subTotal,
      gstPercent,
      gstAmount,
      totalAmount,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Quotation created successfully",
      data: quotation,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL QUOTATIONS
const getAllQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.find()
      .populate("client", "companyName email")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: quotations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE QUOTATION STATUS
const updateQuotationStatus = async (req, res) => {
  try {
    const quotation = await Quotation.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!quotation) {
      return res
        .status(404)
        .json({ success: false, message: "Quotation not found" });
    }

    res.status(200).json({
      success: true,
      message: "Quotation status updated",
      data: quotation,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createQuotation,
  getAllQuotations,
  updateQuotationStatus,
};
