const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get('mongoURI'); // Ensure this is using the correct format

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Removed deprecated options
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;