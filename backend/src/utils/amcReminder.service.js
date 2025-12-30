const cron = require("node-cron");
const Amc = require("../models/Amc.model");

// Helper: days difference
const daysBetween = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.ceil((date2 - date1) / oneDay);
};

// 🔔 AMC Reminder Job
const amcReminderJob = () => {
  cron.schedule("0 9 * * *", async () => {
    console.log("🔁 AMC Reminder Cron Running...");

    const today = new Date();
    const amcs = await Amc.find({ status: "active" }).populate(
      "client",
      "companyName email"
    );

    for (let amc of amcs) {
      const daysLeft = daysBetween(today, new Date(amc.endDate));

      if (daysLeft === 30 || daysLeft === 7) {
        console.log(
          `🔔 AMC Reminder: ${amc.client.companyName} | Expiring in ${daysLeft} days`
        );

        // 🔮 Future:
        // sendEmail()
        // sendWhatsApp()
      }
    }
  });
};

module.exports = amcReminderJob;
