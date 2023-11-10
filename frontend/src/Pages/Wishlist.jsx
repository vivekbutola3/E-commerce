import React, { useContext } from "react";
import "./CSS/Wishlist.css";
import { ShopContext } from "../Context/ShopContext";
import { Navigate, useNavigate } from "react-router-dom";

function Wishlist() {
  const { all_product, wishlistItems, removeFromWishlist, addToCart } =
    useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className="wishlist-box">
      {Object.values(wishlistItems).every((quantity) => quantity === 0) ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            marginTop: "60px",
            fontSize: "10px",
            marginBottom: "100px",
          }}
        >
          <h1>Wishlist is empty, You haven't added anything yet</h1>
          <button
            style={{
              border: "none",
              color: "white",
              background: "black",
              padding: "10px",
              width: "80px",
              height: "40px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Shop
          </button>
        </div>
      ) : (
        <>
          {all_product.map((e) => {
            if (wishlistItems[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="wishlist">
                    <div className="left-image">
                      <img src={e.image} alt="" className="wislist-image" />
                    </div>
                    <div className="right-wishlist">
                      <p>{e.name}</p>
                      <p>${e.new_price}</p>
                      <div className="right-wishlist-btn">
                        {" "}
                        <button
                          onClick={() => {
                            addToCart(e.id);
                          }}
                        >
                          Add To Cart
                        </button>
                        <button
                          onClick={() => {
                            removeFromWishlist(e.id);
                          }}
                          style={{
                            background: "black",
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
        </>
      )}
    </div>
  );
}

export default Wishlist;
