// routes/paymentRoutes.js
const express = require('express');
const { createPayment } = require('../controllers/paymentcontroller');
const authenticateToken = require('../middlewares/authmiddleware');

const router = express.Router();

router.post('/payment', authenticateToken, createPayment);

module.exports = router;
