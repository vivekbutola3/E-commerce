import React from "react";
import "./Footer.css";
import footer_logo from "../Assests/logo_big.png";
import instagram_icon from "../Assests/instagram_icon.png";
import pintester_icon from "../Assests/pintester_icon.png";
import whatsapp_icon from "../Assests/whatsapp_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footerlogo" />
        <p>SHOPECM</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Offices</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Social-icon-insta" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="Social-icon-pintester" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="Social-icon-whatsapp" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>copyright @2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
