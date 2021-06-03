const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DEV_DB_PORT = process.env.DEV_DB_PORT || '27017';
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected: ${conn.connection.host}:${DEV_DB_PORT}`.cyan.underline
    );
  } catch (error) {
    console.error(error.message.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
