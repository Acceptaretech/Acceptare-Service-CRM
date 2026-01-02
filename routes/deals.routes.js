const express = require("express");
const router = express.Router();
const {
  createDeal,
  getDeals,
  updateStage
} = require("../controllers/dealController");

router.post("/", createDeal);
router.get("/", getDeals);
router.put("/:id/stage", updateStage);

module.exports = router;
