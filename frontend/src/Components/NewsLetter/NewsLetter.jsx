import React from "react";
import "./NewsLetter.css";
function NewsLetter() {
  return (
    <div className="newsletter">
      <div>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
      </div>

      <div className="EmailNewsLetter">
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
