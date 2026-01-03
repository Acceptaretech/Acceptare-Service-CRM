// MOCK EMAIL SERVICE (Production-ready structure)

const sendEmail = async ({ to, subject, message }) => {
  try {
    // In real production: nodemailer / SES / SendGrid
    console.log("📧 Sending Email...");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Message:", message);

    return { success: true };
  } catch (error) {
    console.error("Email failed:", error.message);
    return { success: false };
  }
};

module.exports = { sendEmail };
