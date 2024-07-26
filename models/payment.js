// models/Payment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('Payment', {
  metodePay: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pressCodemember: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jumlah: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  transaksiBerhasil: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Payment;
