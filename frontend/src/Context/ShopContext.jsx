import React, { createContext, useContext, useState } from "react";
import all_product from "../Components/Assests/all_product";
import { UserState } from "../Context/userContext";
import axios from "axios";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const { user } = UserState();
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    // Find the item that was added to the cart
    const addedItem = all_product.find((product) => product.id === itemId);

    if (addedItem) {
      // Prepare the data to send to the backend
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        // Make an API POST request to add the item to the user's cart on the backend
        await axios.post(
          "/api/cart",
          {
            userId: user._id,
            items: {
              title: addedItem.name,
              price: addedItem.new_price,
              quantity: 1,
              Total: addedItem.new_price * 1,
            },
          },
          config
        );
      } catch (error) {
        // Handle network errors or other issues
        console.error("Error adding item to cart:", error);
      }
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const productId = parseInt(item, 10);
        if (!isNaN(productId)) {
          let itemInfo = all_product.find(
            (product) => product.id === productId
          );

          if (itemInfo) {
            totalAmount += itemInfo.new_price * cartItems[item];
          }
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
