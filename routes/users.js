import express from "express";
import usersController from "../controllers/users.js";

const router = express.Router();

// Sign-up route
router.post("/signup", usersController.signUp);

// Login route
// router.post("/login", usersController.login);

export default router;
