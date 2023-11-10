import React from "react";
import "./Offers.css";
import hero_imar from "../Assests/hero_image.png";
import exclucive_image from "../Assests/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={hero_imar} alt="exclucive_image" width={"500px"} />
      </div>
    </div>
  );
};

export default Offers;
