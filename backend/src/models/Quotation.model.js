const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    subTotal: { type: Number, required: true },
    gstPercent: { type: Number, default: 18 },
    gstAmount: { type: Number },
    totalAmount: { type: Number },
    status: {
      type: String,
      enum: ["draft", "sent", "approved", "rejected"],
      default: "draft",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quotation", quotationSchema);
