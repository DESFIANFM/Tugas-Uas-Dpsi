// models/Person.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Person = sequelize.define('Person', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  emailAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Person;
