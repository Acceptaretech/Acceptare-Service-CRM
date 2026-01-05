const requiredEnv = ["MONGO_URI", "JWT_SECRET"];

const checkEnv = () => {
  requiredEnv.forEach((key) => {
    if (!process.env[key]) {
      console.error(`❌ Missing environment variable: ${key}`);
      process.exit(1);
    }
  });
};

module.exports = checkEnv;
