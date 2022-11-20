const bcrypt = require('bcrypt');
const Konsultasi = require("../models/konsultasi");

module.exports = {
  getAllKonsultasi: async (req, res) => {
    try {
      const konsultasi = await Konsultasi.find()
        .populate("pasien", "Nama")
        .populate("dokter", "username");
      res.status(200).json(konsultasi);
    } catch (err) {
      res.status(403).json({ message: err });
    }
  },
  getKonsultasiById: async (req, res) => {
    try {
      const konsultasi = await Konsultasi.findById(req.params.konsultasiId)
        .populate("pasien", "Nama")
        .populate("dokter", "username");
      res.status(200).json(konsultasi);
    } catch (err) {
      res.status(403).json({ message: err });
    }
  },
  addKonsultasi: async (req, res) => {
    const konsultasi = new Konsultasi({
      pasien: req.body.pasien,
      dokter: req.body.dokter,
      poli: req.body.poli,
    });
    try {
      const savedKonsultasi = await konsultasi.save();
      res.status(200).json(savedKonsultasi);
    } catch (err) {
      res.status(403).json({ message: err });
    }
  },

  updateKonsultasi: async (req, res) => {
    try {
      const updatedKonsultasi = await Konsultasi.updateOne(
        { _id: req.params.konsultasiId },
        {
          $set: {
            pasien: req.body.pasien,
            dokter: req.body.dokter,
            poli: req.body.poli,
            tanggal_konsultasi: req.body.tanggal_konsultasi,
          },
        }
      );
      res.status(200).json(updatedKonsultasi);
    } catch (err) {
      res.status(403).json({ message: err });
    }
  },
  deleteKonsultasi: async (req, res) => {
    try {
      const removedKonsultasi = await Konsultasi.remove({
        _id: req.params.konsultasiId,
      });
      res.status(200).json(removedKonsultasi);
    } catch (err) {
      res.status(403).json({ message: err });
    }
  },
};
