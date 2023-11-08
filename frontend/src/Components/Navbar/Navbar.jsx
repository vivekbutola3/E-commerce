import React, { useContext, useState } from "react";
import "./Navbar.css";
import SHOPEC from "../Assests/SHOPEC.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { UserState } from "../../Context/userContext";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
const Navbar = () => {
  const [menuActive, setMenuActive] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const { user, logout } = UserState();
  const [displayNavbar, setDisplayNavbar] = useState("flex");
  const history = useNavigate();

  const handleMenuClick = () => {
    setDisplayNavbar(!displayNavbar);
  };
  return (
    <>
      <div className="nav-offer">
        <h1>5% off on prepaid oders</h1>
      </div>
      <div className="mobile-menu">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="nav-logo">
            <img src={SHOPEC} alt="logo" />
            <p>SHOPECM</p>
          </div>
          <div
            style={{
              justifySelf: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            {!displayNavbar ? (
              <BiMenu
                style={{
                  width: "60px",
                  height: "30px",
                  right: 0,
                  cursor: "pointer",
                }}
                onClick={handleMenuClick}
              />
            ) : (
              <AiOutlineClose
                style={{
                  width: "60px",
                  height: "30px",
                  right: 0,
                  cursor: "pointer",
                }}
                onClick={handleMenuClick}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className="navbar"
        style={{
          display: displayNavbar ? "flex" : "none",
        }}
      >
        <div className="nav-logo">
          <img src={SHOPEC} alt="logo" />
          <p>SHOPECM</p>
        </div>

        <ul className="nav-menu">
          <li>
            {user ? (
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                }}
                className="moblie-navbar-profilename"
              >
                Hi, {user.name}
              </p>
            ) : (
              <></>
            )}
          </li>
          <li>
            <input
              type="search"
              placeholder="Search for products"
              style={{
                width: "30rem",
                height: "5vh",
                fontSize: "20px",
                background: "wheat",

                padding: "12px",
                border: "1px solid white",

                outline: "none",
              }}
            />
          </li>
          {/* <li
            onClick={() => {
              setMenuActive("shop");
            }}
          >
            <Link style={{ textDecoration: "none", color: "grey" }} to={"/"}>
              Shop
            </Link>{" "}
            {menuActive === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenuActive("men");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "grey" }}
              to={"/mens"}
            >
              Men
            </Link>{" "}
            {menuActive === "men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenuActive("women");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "grey" }}
              to={"/womens"}
            >
              Women
            </Link>{" "}
            {menuActive === "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenuActive("kids");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "grey" }}
              to={"/kids"}
            >
              Kids
            </Link>{" "}
            {menuActive === "kids" ? <hr /> : <></>}
          </li> */}
        </ul>
        <div className="nav-login-cart">
          {user ? (
            <>
              <BiUserCircle
                style={{
                  fontSize: "40px",
                }}
              />
              {/* <p
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                Hi, {user.name}
              </p> */}
              <button
                onClick={logout}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "none",
                  outline: "none",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            // If user is not logged in, display the login button
            <Link to="/register">
              <button>Login</button>
            </Link>
          )}
          <div className="cart-icon-count">
            {" "}
            <Link to={"/cart"}>
              <img src={cart_icon} alt="cart_icon" />
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
