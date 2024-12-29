import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProductPage from "./components/ProductPage";
import Products from "./components/Products";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Category from "./pages/Category.jsx";
import Profile from "./components/Profile.jsx";
import Cart from "./components/Cart.jsx";
import LimitedEdition from "./pages/LimitedEdition.jsx";
import Checkout from "./pages/Checkout.jsx";

const App = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/sign-up");
  };

  return (
    <div>
      <Header />
      <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/category/:categoryText" element={<Category />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/limited-edition" element={<LimitedEdition />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
