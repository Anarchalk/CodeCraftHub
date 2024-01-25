const mongoose = require("mongoose");
const User = require("../models/userModel");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://root:MTMyMS1hbm5hY2hh@localhost:27017");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
module.exports = connectDB;
