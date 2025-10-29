import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

// CONFIG EXPRESS
app.use(cors()); // Adds Headers to allow any domain to hit this routes
// In the next case, i would allow only a FE from localhost:3000 to access
// app.use(cors({
//   origin: 'http://localhost:3000'
// }));

app.use(express.json()); // Middleware to convert JSON bodies to JS objects
app.use(express.static("public")); // Serve static files from the "public" directory

// ROUTES
app.use("/express-users-events-api/users", userRoutes);
// app.use("/events", eventRoutes);
app.get("/express-users-events-api/", (req, res) => {
  res.send("Hello from the server!");
});

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
