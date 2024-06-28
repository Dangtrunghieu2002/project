// Importing dependencies using ES Module syntax
import express from "express";
import {
  signIn,
  signUp,
  getUserProfile,
} from "../controllers/authController.js";
import { confirmBooking } from "../controllers/bookingController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Define routes
router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/profile", authenticateToken, getUserProfile);
router.post("/signup", authenticateToken, confirmBooking);

// Export the router using default export for ES Modules
export default router;
