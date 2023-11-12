const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(
  cors({
    origin: ["https://e-commerce-lzc5-8y2eza61d-vivekbutola3.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
