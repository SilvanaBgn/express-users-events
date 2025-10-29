import userModel from "../models/user.js";

const signUp = (req, res) => {
  const { name, email, password } = req.body;

  // Add logic to handle user sign-up
  // Example: Validate input, hash password, store user in database
  if (!name.trim() || !password.trim() || !email.trim()) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  // TODO encrypt password before storing it

  try {
    const newCreatedUser = userModel.createUser({ name, email, password });

    res
      .status(201)
      .json({ message: "User signed up successfully", newCreatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

const login = (req, res) => {
  const { name, password } = req.body;

  // Add logic to handle user login
  // Example: Validate user credentials and generate token

  res.status(200).json({ message: "User logged in successfully" });
};

const getAll = (req, res) => {
  const users = userModel.getAllUsers();
  res.status(200).json({ users });
};

export default { signUp, login, getAll };
