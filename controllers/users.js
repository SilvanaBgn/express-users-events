const signUp = (req, res) => {
  const { username, password } = req.body;

  // Add logic to handle user sign-up
  // Example: Validate input, hash password, store user in database
  if (!username.trim() || !password.trim()) {
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

  const newCreatedUser = createUser({ username, password });

  res
    .status(201)
    .json({ message: "User signed up successfully", newCreatedUser });
};

const login = (req, res) => {
  const { username, password } = req.body;

  // Add logic to handle user login
  // Example: Validate user credentials and generate token

  res.status(200).json({ message: "User logged in successfully" });
};

export default { signUp, login };
