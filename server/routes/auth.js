import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";

const router = new Router();

// Describe here all the routes that will be used for different purposes
// Register
// http://localhost:3002/api/auth/register
// this is a post request because we're sending data from front-end to backend
router.post("/register", register);
// Login
// http://localhost:3002/api/auth/login
router.post("/login", login);
// Get me (when we receive our profiles")
// http://localhost:3002/api/auth/me
// we're not sending anything in the profile page (getME), so we'll change post to get
router.get("/me", getMe);

export default router;
