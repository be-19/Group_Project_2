const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  getUserbyRole,
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.get("/", getUserbyRole);

module.exports = router;
