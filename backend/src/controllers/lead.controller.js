const { successResponse } = require("../utils/response");

const getLeads = async (req, res, next) => {
  try {
    // logic later
    successResponse(res, "Leads fetched successfully", []);
  } catch (error) {
    next(error);
  }
};

module.exports = { getLeads };
