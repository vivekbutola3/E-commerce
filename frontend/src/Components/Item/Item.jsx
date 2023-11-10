import React, { useContext, useState, useEffect } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const [heart, setHeart] = useState(false);
  const { addToWishlist, wishlistItems, removeFromWishlist } =
    useContext(ShopContext);

  useEffect(() => {
    // Check if the item is in the wishlist and update the heart state accordingly
    setHeart(wishlistItems[props.id.id] > 0);
  }, [wishlistItems, props.id.id]);

  const handleClickHeart = () => {
    setHeart(!heart);
    if (heart) {
      // Remove from wishlist if the item is already in the wishlist
      removeFromWishlist(props.id.id);
    } else {
      // Add to wishlist if the item is not in the wishlist
      addToWishlist(props.id.id);
    }
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id.id}`}>
        <img src={props.image} alt="" onClick={() => window.scrollTo(0, 0)} />
      </Link>{" "}
      <div className="heart" onClick={handleClickHeart}>
        {heart ? <AiFillHeart style={{ color: "red" }} /> : <AiOutlineHeart />}
      </div>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
