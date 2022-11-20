const express = require("express");
const router = express.Router();
const konsultasiController = require("../controllers/konsultasi.controller");

const {
  getAllKonsultasi,
  getKonsultasiById,
  addKonsultasi,
  updateKonsultasi,
  deleteKonsultasi,
} = konsultasiController;

router.get("/", konsultasiController);
router.get("/:konsultasiId", konsultasiController);
router.post("/", konsultasiController.addKonsultasi);
router.patch("/:konsultasiId", konsultasiController);
router.delete("/:konsultasiId", konsultasiController);

module.exports = router;
