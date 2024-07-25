const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get('mongoURI'); // Ensure this is using the correct format

const connectDB = async () => {
    try {
        // Log the mongoURI to ensure it's being set correctly
        console.log('MongoDB URI:', mongoURI);

        // Connect to MongoDB without deprecated options
        await mongoose.connect(mongoURI, {
            // Removed deprecated options
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        // Log the error message and additional details
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
