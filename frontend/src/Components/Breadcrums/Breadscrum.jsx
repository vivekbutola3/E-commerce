import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assests/breadcrum_arrow.png";

function Breadscrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home
      <img src={arrow_icon} alt="arrow" />
      Shop
      <img src={arrow_icon} alt="arrow" />
      {product.category}
      <img src={arrow_icon} alt="arrow" />
      {product.name}
    </div>
  );
}

export default Breadscrum;
