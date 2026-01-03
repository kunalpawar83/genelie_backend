const mongoose = require("mongoose");
const catchAsync = require("./catchAsync.js");
const apperror = require("./appError.js");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = { connectDB };
