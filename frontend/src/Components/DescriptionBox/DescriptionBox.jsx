import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description">
      <div className="description-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Clothing is a fundamental aspect of human culture and daily life,
          serving both functional and expressive purposes. Here's a description
          of clothing: Clothing is a diverse range of garments and accessories
          worn by people to cover and protect their bodies while also expressing
          their individuality and cultural identity. It serves various essential
          functions:
        </p>
        <p>
          Protection: Clothing provides protection from environmental elements
          such as weather, UV radiation, and physical hazards. It shields the
          body from extreme cold, heat, wind, and rain, helping to maintain
          comfort and well-being. Modesty: Clothing plays a crucial role in
          maintaining modesty and social decorum by covering private areas of
          the body, respecting cultural norms and societal expectations.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
