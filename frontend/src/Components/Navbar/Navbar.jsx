import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import SHOPEC from "../Assests/SHOPEC.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { UserState } from "../../Context/userContext";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GrFormNextLink } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
  // const [menuActive, setMenuActive] = useState("shop");
  const { cartData, all_product, addToCart } = useContext(ShopContext);
  const { user, logout } = UserState();
  const isLoggedIn = !!user;

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayNavbar, setDisplayNavbar] = useState("flex");
  const [displayMenu, setDisplayMenu] = useState("none");
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const handleSearch = () => {
    // Map the initial products if needed
    const mappedProducts = all_product.map((product) => ({
      id: product.id, // Adjust this based on your data structure
      title: product.name, // Adjust this based on your data structure
      category: product.category, // Adjust this based on your data structure
      // Other properties...
    }));

    // Filter products based on searchQuery
    const filteredProducts = mappedProducts.filter((product) => {
      const titleMatch =
        product.title &&
        product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const categoryMatch =
        product.category &&
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return titleMatch || categoryMatch;
    });

    // Update the searchResults state with the filtered products only if there is a search query
    setSearchResults(
      searchQuery.trim() !== "" ? filteredProducts.slice(0, 5) : []
    );
  };

  useEffect(() => {
    // Call handleSearch whenever searchQuery changes
    handleSearch();
  }, [searchQuery, all_product]);
  // useEffect to update cart count when cartData changes
  useEffect(() => {
    // Update the cart count in the navbar whenever cartData changes
    const updatedCartCount = Array.isArray(cartData) ? cartData.length : 0;
    setCartCount(updatedCartCount);
  }, [cartData, addToCart]);
  const handleMenuClick = () => {
    setDisplayNavbar(!displayNavbar);
  };
  const handleMenuDrop = () => {
    setDisplayMenu(!displayMenu);
  };

  console.log(searchResults);
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
            <img
              src={SHOPEC}
              alt="logo"
              onClick={() => {
                navigate("/");
              }}
              style={{
                cursor: "pointer",
              }}
            />
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
          <img
            src={SHOPEC}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
            style={{
              cursor: "pointer",
            }}
          />
          <p>SHOPECM</p>
        </div>

        <ul className="nav-menu">
          <li>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <input
                  type="search"
                  className="nav-searchbar"
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  style={{
                    width: "70px",
                    height: "4.8vh",
                    fontSize: "16px",
                    background: "black",
                    color: "white",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  <AiOutlineSearch
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </button>
              </div>

              {searchResults.length > 0 && (
                <div className="search-results">
                  <ul>
                    {searchResults.map((result) => (
                      <>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "20px",
                            position: "relative",
                          }}
                        >
                          {" "}
                          <AiOutlineSearch
                            style={{
                              fontSize: "20px",
                              position: "absolute",
                              left: "8px",
                            }}
                          />
                          <Link
                            to={`/product/${result.id}`}
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            <li key={result.id}>{result.title}</li>
                          </Link>
                        </div>
                      </>
                    ))}
                  </ul>
                </div>
              )}
            </div>
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
          <AiOutlineHeart
            style={{
              fontSize: "40px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/wishlist");
            }}
          />

          <BiUserCircle
            style={{
              fontSize: "40px",
              cursor: "pointer",
            }}
            onClick={handleMenuDrop}
          />
          <div
            className="navlogin-dropmenu"
            style={{
              display: displayMenu ? "none" : "flex",
            }}
          >
            {user ? (
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "center",
                  borderBottom: "none",
                }}
              >
                <img
                  src="https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image-337x279.png"
                  alt="profile"
                  style={{
                    width: "80px",
                  }}
                />
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                >
                  Hi, {user.name}
                </p>
              </div>
            ) : (
              <Link to="/login">
                {" "}
                <button
                  onClick={logout}
                  style={{
                    width: "100%",
                    background: "black",
                    color: "white",
                    border: "none",
                    outline: "none",
                    borderRadius: "0",
                  }}
                >
                  Login
                </button>
              </Link>
            )}

            <div>
              <h4>BECOME SELLER</h4>
            </div>
            <div>
              <h4>ORDERS</h4>
            </div>
            <div>
              <h4>WISHLISTS</h4>
            </div>
            <div>
              {user ? (
                <h4>
                  <button
                    onClick={logout}
                    style={{
                      width: "100%",
                      background: "red",
                      color: "white",
                      border: "none",
                      outline: "none",
                      borderRadius: "0",
                    }}
                  >
                    Logout
                  </button>
                </h4>
              ) : (
                <></>
              )}
            </div>
          </div>
          {user ? (
            <></>
          ) : (
            // If user is not logged in, display the login button
            <Link to="/register">
              <button>Login</button>
            </Link>
          )}
          <div className="cart-icon-count">
            {" "}
            {isLoggedIn ? (
              // If user is logged in, display the cart link
              <Link to={"/cart"}>
                <img src={cart_icon} alt="cart_icon" />
              </Link>
            ) : (
              // If user is not logged in, display a message to log in
              <div
                onClick={() => {
                  navigate("/login");
                  alert("You must login First.");
                }}
                style={{ cursor: "pointer" }}
              >
                {" "}
                <img src={cart_icon} alt="cart_icon" />
              </div>
            )}
            <div className="nav-cart-count">{cartCount}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
