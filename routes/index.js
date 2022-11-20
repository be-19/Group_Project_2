const express = require("express");
const router = express.Router();

const pasienRouter = require("./pasien.router");
const authRouter = require("./auth.router");
const konsultasiRouter = require("./konsultasi.router");

router.use("/pasien", pasienRouter);
router.use("/auth", authRouter);
router.use("/konsultasi", konsultasiRouter);

module.exports = router;

