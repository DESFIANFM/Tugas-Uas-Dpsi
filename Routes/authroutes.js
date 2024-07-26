// routes/authRoutes.js
const express = require('express');
const { register, login, addAddress } = require('../controllers/authcontroller');
const authenticateToken = require('../middlewares/authmiddleware');
const sequelize = require('../config/database');


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/add-address', authenticateToken, addAddress);

module.exports = router;
