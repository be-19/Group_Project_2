const express = require('express');
const router = express.Router()


const pasienRouter = require('./pasien.router');
const authRouter = require('./auth.router');


router.use("/pasien", pasienRouter)
router.use("/auth", authRouter)

module.exports = router
