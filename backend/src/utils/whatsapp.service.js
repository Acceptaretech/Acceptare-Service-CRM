// MOCK WHATSAPP SERVICE (API READY)

const sendWhatsAppMessage = async ({ to, message }) => {
  try {
    // In real production: WhatsApp Business API
    console.log("💬 Sending WhatsApp Message...");
    console.log("To:", to);
    console.log("Message:", message);

    return { success: true };
  } catch (error) {
    console.error("WhatsApp failed:", error.message);
    return { success: false };
  }
};

module.exports = { sendWhatsAppMessage };
