const express = require("express");
const router = express.Router();

const {

  login,
  register,
  getAllUser,
  getUserByID,
  deleteUserByID,
  updateUserByID,
} = require("../controllers/user.controller");

router.post("/login", login);
router.post("/register", register);
router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.delete("/:id", deleteUserByID);
router.put("/:id", updateUserByID);

module.exports = router;
