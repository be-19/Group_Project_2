const Pasien = require("../models/pasien");

module.exports = {
  getAllPasien: async (req, res) => {
    if (req.query.nik) {
      try {
        const pasien = await Pasien.find({ nik: req.query.nik });
        res.status(200).json({
          message: "Successfully get patient data",
          data: pasien,
        });
      } catch (err) {
        res.status(400).json({
          message: "Failed to get patient data",
          data: err,
        });
      }
    } else {
      try {
        const pasien = await Pasien.find({}, "-__v");
        res.status(200).json({
          message: "Success get data pasien",
          data: pasien,
        });
      } catch (err) {
        res.status(500).json({
          message: "Internal server error",
          data: err,
        });
      }
    }
  },

  getPasienByID: async (req, res) => {
    try {
      const { id } = req.params;
      const pasien = await Pasien.findById(id);
      if (pasien === null) {
        res.status(404).json({
          message: "Pasien not found",
        });
      } else {
        res.status(200).json(pasien);
      }
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      });
    }
  },
  getPasienByNik: async (req, res) => {
    try {
      const pasien = await Pasien.findOne({ Nik: req.params.nik });
      if (pasien === null) {
        res.status(404).json({
          message: "Pasien not found",
        });
      } else {
        res.status(200).json(pasien);
      }
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      });
    }
  },
  addPasien: async (req, res) => {
    try {
      const data = req.body;
      const user = new Pasien(data);
      await user.save();
      res.status(200).json({
        message: "data has been created!!",
      });
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
        error: err,
      });
    }
  },

  deletePasienByID: async (req, res) => {
    try {
      const data = req.body;
      await Pasien.deleteOne({ id: data._id });
      res.status(200).json({
        message: "delete pasien succsess",
      });
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      });
    }
  },
  deletePasien: async (req, res) => {
    try {
      await Pasien.deleteMany();
      res.status(200).json({
        message: "delete pasien succsess",
      });
    } catch (err) {
      res.status(500).json({
        message: "internal server error",
      });
    }
  },

  updatePasienByID: async (req, res) => {
    try {
      const updatedPasien = await Pasien.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res
        .status(200)
        .json({ message: "berhasil update data", data: updatedPasien });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
