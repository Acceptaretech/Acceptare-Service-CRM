const { sendEmail } = require("../utils/email.service");
const { sendWhatsAppMessage } = require("../utils/whatsapp.service");

// SEND EMAIL
const sendTestEmail = async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    const result = await sendEmail({ to, subject, message });

    res.status(200).json({
      success: true,
      message: "Email triggered successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// SEND WHATSAPP
const sendTestWhatsApp = async (req, res) => {
  try {
    const { to, message } = req.body;

    const result = await sendWhatsAppMessage({ to, message });

    res.status(200).json({
      success: true,
      message: "WhatsApp triggered successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  sendTestEmail,
  sendTestWhatsApp,
};
