import React, { useEffect } from "react";
import "./Hero.css";
import hand_icon from "../Assests/hand_icon.png";
import arrow_icon from "../Assests/arrow.png";
import hero_imar from "../Assests/hero_image.png";
import { useNavigate } from "react-router-dom";
import women_image from "../Assests/product_1.png";
import men_image from "../Assests/product_20.png";
import kid_image from "../Assests/product_30.png";
import image from "../Assests/product_25.png";

const Category = [
  {
    name: "Shop",
    pic: image,
    link: "/",
  },
  {
    name: "Men",
    pic: men_image,
    link: "/mens",
  },
  {
    name: "Women",
    pic: women_image,
    link: "/womens",
  },
  {
    name: "kids",
    pic: kid_image,
    link: "/kids",
  },
];
const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/");
  }, [navigate]);
  return (
    <>
      {" "}
      <div
        className="category"
        style={{
          display: "flex",
          width: "100%",

          justifyContent: "space-evenly",
        }}
      >
        {Category.map((item, i) => {
          return (
            <div
              className="category-pic"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
              }}
            >
              <img
                src={item.pic}
                alt="categoryimage"
                style={{
                  width: "120px",
                  height: "120px",
                  border: "4px solid orange",
                  borderRadius: "50%",
                  cursor: "pointer",
                  // opacity: "30%",
                }}
                onClick={() => {
                  navigate(item.link);
                }}
              />
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>New</p>
              <img src={hand_icon} alt="hand_icon" />
            </div>
            <p>Collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collections</div>
            <img src={arrow_icon} alt="arrow_icon" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_imar} alt="hero_image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
