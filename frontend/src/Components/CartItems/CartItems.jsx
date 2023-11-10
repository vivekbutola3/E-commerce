import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assests/cart_cross_icon.png";

const CartItems = () => {
  const { removeFromCart, getTotalCartAmount, cartData } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      {cartData.length === 0 ? (
        <h2
          style={{
            textAlign: "center",
          }}
        >
          You haven't added any item yet.
        </h2>
      ) : (
        <>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {cartData.map((item, index) => (
            <div key={index}>
              <div className="cartitems-format cartitems-format-main">
                <img src={""} alt="" className="carticon-product-icon" />
                <p>{item.title}</p>
                <p>${item.price}</p>
                <button className="cartitems-quantity">
                  {/* {cartData[item.id]} */}1
                </button>
                <p>${item.price}</p>

                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  alt="remove_icon"
                  onClick={() => {
                    removeFromCart(item._id);
                  }}
                />
              </div>
              <hr />
            </div>
          ))}
          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cartitems-total-item">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
              <p>If you have a promo code, Enter it here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
