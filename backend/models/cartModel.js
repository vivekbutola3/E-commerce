const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: "String",
  price: "Number",
  quantity: "Number",
  Total: "Number",
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
