const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    dateOfJoining: { type: Date, required: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    employeeType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Seasonal"],
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "empDetail");

module.exports = User;
