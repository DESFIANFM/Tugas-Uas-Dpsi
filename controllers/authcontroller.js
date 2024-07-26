// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Person } = require('../models');
const sequelize = require('../config/database');
const {Address} = require('../models')

require('dotenv').config();

const register = async (req, res) => {
  try {
    const { name, phoneNumber, emailAddress, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newPerson = await Person.create({ name, phoneNumber, emailAddress, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully', newPerson });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

const login = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;
    const person = await Person.findOne({ where: { emailAddress } });
    if (!person) return res.status(404).json({ error: 'User not found' });

    const validPassword = await bcrypt.compare(password, person.password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: person.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};

const addAddress = async (req, res) => {
  try {
    const { personId, username, phoneNumber } = req.body;
    const newAddress = await Address.create({ personId, username, phoneNumber });
    res.status(201).json({ message: 'Address added successfully', newAddress });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error adding address' });
  }
};

module.exports = { register, login, addAddress };
