const mongoose = require("mongoose")
require("dotenv").config()

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDB connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

exports.connectDB= connectDB