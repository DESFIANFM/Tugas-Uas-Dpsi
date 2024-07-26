// controllers/paymentController.js
const { Payment } = require('../models');

const createPayment = async (req, res) => {
  try {
    const { orderId, metodePay, pressCodemember, jumlah } = req.body;
    const newPayment = await Payment.create({ orderId, metodePay, pressCodemember, jumlah });
    res.status(201).json({ message: 'Payment created successfully', newPayment });
  } catch (error) {
    res.status(500).json({ error: 'Error creating payment' });
  }
};

module.exports = { createPayment };
