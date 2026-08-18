const mongoose = require('mongoose');
const env = require('./env');

const dns = require("node:dns/promises");
dns.setServers(['1.1.1.1', '1.0.0.1']);

mongoose.set('strictQuery', true);

async function connectDB() {
    const conn = await mongoose.connect(env.mongoUri, {
        serverSelectionTimeoutMS: 5000, // Set a timeout for server selection
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    mongoose.connection.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
        process.exit(1); // Exit the process with an error code
    });
    mongoose.connection.on('disconnected', () => {
        console.warn('MongoDB disconnected. Attempting to reconnect...');
    })
}   

module.exports = { connectDB };