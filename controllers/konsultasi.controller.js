const Konsultasi = require("../models/model.konsultasi");

// Create and save a new konsultasi
module.exports = {
  getAllKonsultasi: async (req, res) => {
    try {
      const konsultasi = await Konsultasi.find();
      res.json(konsultasi);
    } catch (err) {
      res.json({ message: err });
    }
  },
  getKonsultasiById: async (req, res) => {
    try {
      const konsultasi = await Konsultasi.findById(req.params.konsultasiId);
      res.json(konsultasi);
    } catch (err) {
      res.json({ message: err });
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
      res.json(savedKonsultasi);
    } catch (err) {
      res.json({ message: err });
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
      res.json(updatedKonsultasi);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteKonsultasi: async (req, res) => {
    try {
      const removedKonsultasi = await Konsultasi.remove({
        _id: req.params.konsultasiId,
      });
      res.json(removedKonsultasi);
    } catch (err) {
      res.json({ message: err });
    }
  },
};
