const express = require("express");
const router = express.Router();

// Import your Cart model
const Cart = require("../models/cartModel");

// Create a route to save cart data
router.post("/", async (req, res) => {
  try {
    const { userId, title, price, quantity, Total } = req.body;

    // Create a new cart document and save it to MongoDB
    const cart = new Cart({
      userId,
      title,
      price,
      quantity,
      Total,
    });

    await cart.save();

    res.status(201).json({ message: "Cart data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving cart data" });
  }
});
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const cartItems = await Cart.find({ userId });
    res.json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.delete("/:id", async (req, res) => {
  const itemId = req.params.id;

  try {
    const result = await Cart.deleteOne({ _id: itemId });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Item deleted successfully" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    console.error("Error removing cart item:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
