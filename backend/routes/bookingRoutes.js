// Import the express module and booking controller using ES Modules
import express from "express";
import { confirmBooking } from "../controllers/bookingController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Define the booking confirmation route
router.post("/book", authenticateToken, (req, res) => {
  res.json({ message: "Booking successful", user: req.user });
});

router.get("/check-auth", authenticateToken, (req, res) => {
  res.json({ message: "Authenticated", user: req.user });
});

// Export the router
export { router as bookingRoutes };
