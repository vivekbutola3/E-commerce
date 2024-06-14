const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const PORT = process.env.PORT;

const allowedOrigins = [
  "http://localhost:3000",
  "https://e-commerce-lzc5.vercel.app",
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
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello, API is working", status: true });
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`API is working on port: ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});
