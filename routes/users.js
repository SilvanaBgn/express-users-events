import express from "express";
import {
  signUp as signUpController,
  login as loginController,
} from "../controllers/users";

const router = express.Router();

// Sign-up route
router.post("/signup", signUpController);

// Login route
router.post("/login", loginController);

export default router;
