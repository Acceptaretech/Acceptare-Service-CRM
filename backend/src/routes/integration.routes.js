const express = require("express");
const router = express.Router();

const {
  sendTestEmail,
  sendTestWhatsApp,
} = require("../controllers/integration.controller");

const { protect, authorizeRoles } = require("../middlewares/auth.middleware");

// EMAIL TEST
router.post("/email", protect, authorizeRoles("admin"), sendTestEmail);

// WHATSAPP TEST
router.post("/whatsapp", protect, authorizeRoles("admin"), sendTestWhatsApp);

module.exports = router;
