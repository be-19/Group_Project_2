const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const konsultasiRouter = require("./routers/konsultasi.router");

app.use(express.json());
app.use("/konsultasi", konsultasiRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/klinik")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
