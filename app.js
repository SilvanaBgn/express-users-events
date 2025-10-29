import express from "express";
import routes from "./routes/index.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
