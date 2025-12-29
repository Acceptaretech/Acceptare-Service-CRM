const express = require("express");
const router = express.Router();

const {
  createClient,
  getAllClients,
  updateClient,
  deleteClient,
} = require("../controllers/client.controller");

const {
  protect,
  authorizeRoles,
} = require("../middlewares/auth.middleware");

// CREATE CLIENT (admin + sales)
router.post(
  "/",
  protect,
  authorizeRoles("admin", "sales"),
  createClient
);

// GET ALL CLIENTS (all logged users)
router.get("/", protect, getAllClients);

// UPDATE CLIENT (admin + sales)
router.put(
  "/:id",
  protect,
  authorizeRoles("admin", "sales"),
  updateClient
);

// DELETE CLIENT (admin only)
router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  deleteClient
);

module.exports = router;
