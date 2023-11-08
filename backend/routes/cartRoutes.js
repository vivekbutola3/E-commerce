const express = require("express");
const router = express.Router();

// Import your Cart model
const Cart = require("../models/cartModel");

// Create a route to save cart data
router.post("/", async (req, res) => {
  try {
    const { userId, items } = req.body;

    // Create a new cart document and save it to MongoDB
    const cart = new Cart({
      userId,
      items,
    });

    await cart.save();

    res.status(201).json({ message: "Cart data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving cart data" });
  }
});

module.exports = router;
