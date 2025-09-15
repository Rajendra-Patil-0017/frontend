import './theme.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Shop from "./Pages/Shop";
import Checkout from "./Pages/Checkout";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSingup from "./Pages/LoginSingup";

import men_banner from "./Components/Assets/Banner_men.png";
import women_banner from "./Components/Assets/Banner_women.png";
import tshirt_banner from "./Components/Assets/Banner_tshirt.png";
import pant_banner from "./Components/Assets/Banner_pant.png";
import watch_banner from "./Components/Assets/Banner_watch.png";
import mobile_banner from "./Components/Assets/Bannner_moblie.png";
import headphone_banner from "./Components/Assets/Banner_Headphone.png";
import footwear_banner from "./Components/Assets/Banner_footwear.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="Mens" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={women_banner} category="Womens" />}
        />
        <Route
          path="/t-shirt"
          element={<ShopCategory banner={tshirt_banner} category="T-Shirt" />}
        />
        <Route
          path="/pant"
          element={<ShopCategory banner={pant_banner} category="Pant" />}
        />
        <Route
          path="/watch"
          element={<ShopCategory banner={watch_banner} category="Watch" />}
        />
        <Route
          path="/mobile"
          element={<ShopCategory banner={mobile_banner} category="Mobile" />}
        />
        <Route
          path="/headphone"
          element={<ShopCategory banner={headphone_banner} category="Headphone" />}
        />
        <Route
          path="/footwear"
          element={<ShopCategory banner={footwear_banner} category="Footwear" />}
        />

        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginSingup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
