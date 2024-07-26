// controllers/orderController.js
const { Order } = require('../models');

const createOrder = async (req, res) => {
  try {
    const { personId, produkId, deskripsi, namaProduk, harga } = req.body;
    const newOrder = await Order.create({ personId, produkId, deskripsi, namaProduk, harga });
    res.status(201).json({ message: 'Order created successfully', newOrder });
  } catch (error) {
    res.status(500).json({ error: 'Error creating order' });
  }
};

module.exports = { createOrder };
