const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      age,
      dateOfJoining,
      title,
      department,
      employeeType,
    } = req.body;

    const newUser = new User({
      firstname,
      lastname,
      age,
      dateOfJoining,
      title,
      department,
      employeeType,
    });

    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};
