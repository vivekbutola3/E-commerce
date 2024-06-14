const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const PORT = process.env.PORT || 5000; // Replace with your preferred port number

const app = express();

// Connect to MongoDB or any other database
connectDB()
  .then(() => {
    console.log("Connected to MongoDB");

    // CORS middleware configuration
    const allowedOrigins = [
      "http://localhost:3000", // Example: your local development environment
      "https://e-commerce-lzc5.vercel.app", // Your deployed frontend URL
    ];

    const corsOptions = {
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      // credentials: true, // Allow cookies and authentication headers
    };

    // Apply CORS middleware
    app.use(cors(corsOptions));

    // Middleware and routes
    app.use(express.json());
    app.use("/api/users", userRoutes);
    app.use("/api/cart", cartRoutes);

    // Default route
    app.get("/", (req, res) => {
      res.status(200).send({ message: "Hello, API is working", status: true });
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
