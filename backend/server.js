import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { sequelize } from "./models/index.js";
import { bookingRoutes } from "./routes/bookingRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

dotenv.config(); // Ensure this is called before accessing any env variables

// Apply middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Setup routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
    const PORT = process.env.PORT || 3001; // Ensure this matches the frontend calls
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database synchronization error:", err);
  });

// Root route
app.get("/", (req, res) => {
  res.send("Hello World! This is your Node.js server.");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
