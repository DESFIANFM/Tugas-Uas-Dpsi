const express = require('express');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authroutes');
const orderRoutes = require('./routes/orderroutes');
const paymentRoutes = require('./routes/paymentroutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api', orderRoutes);
app.use('/api', paymentRoutes);

const PORT = process.env.PORT || 3306;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;