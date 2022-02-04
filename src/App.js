import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function updateCart(e) {
    setCart(cart.concat(e.currentTarget.getAttribute("data-name")));
  }

  return (
    <BrowserRouter>
      <Navbar cartItems="0" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop updateCart={updateCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
