import express from "express";
import usersController from "../controllers/users-controllers.js";

const router = express.Router();

// Sign-up route
router.post("/signup", usersController.signUp);
router.get("/", usersController.getAll);

// Login route
// router.post("/login", usersController.login);

export default router;
