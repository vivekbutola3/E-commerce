import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assests/banner_mens.png";
import women_banner from "./Components/Assests/banner_women.png";
import kid_banner from "./Components/Assests/banner_kids.png";
import Login from "./Pages/Login";
import Wishlist from "./Pages/Wishlist";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":Id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<LoginSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />}>
          <Route path=":Id" element={<Wishlist />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
