const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const product = require('./routes/Products');
const checkout = require('./routes/checkout');
const orders = require('./routes/orders');
const users = require('./routes/users');
const Order = require('./models/order');


dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/products', product );
app.use('/api/checkout', checkout);
app.use('/api/orders', orders);
app.use('/api/users', users );

const PORT = process.env.PORT || 5000;

app.use('/', (req, res) => {
    res.json({ message: "Hola" })
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
