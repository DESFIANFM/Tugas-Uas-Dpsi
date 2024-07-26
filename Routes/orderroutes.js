// routes/orderRoutes.js
const express = require('express');
const { createOrder } = require('../controllers/ordercontroller');
const authenticateToken = require('../middlewares/authmiddleware');

const router = express.Router();

router.post('/order', authenticateToken, createOrder);

module.exports = router;
