import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import Item from "../Item/Item";
import star_icon from "../Assests/star_icon.png";
import stardull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { UserState } from "../../Context/userContext";

const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { user } = UserState();

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={props.product.image} alt="" />
          <img src={props.product.image} alt="" />
          <img src={props.product.image} alt="" />
          <img src={props.product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={props.product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{props.product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={stardull_icon} alt="" />
          <p>(140)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${props.product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${props.product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Clothing is a fundamental aspect of human culture and daily life,
          serving both functional and expressive purposes. Here's a description
          of clothing:
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        {user ? ( // Check if the user is logged in
          <button
            onClick={() => {
              addToCart(props.product.id);
              window.dispatchEvent(new Event("cartChange"));
            }}
          >
            ADD TO CART
          </button>
        ) : (
          <button
            onClick={() => {
              alert("Please log in to add items to your cart.");
            }}
          >
            ADD TO CART
          </button>
        )}
        <p className="productdisplay-right-category">
          <span>Category :</span>
          {props.product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Modern, Latest{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
