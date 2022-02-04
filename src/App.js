import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { useState } from "react";

const items = {
  Keyboard: { filename: "keyboard.jpg", price: 69 },
  Mouse: { filename: "mouse.jpg", price: 100 },
  Gamepad: { filename: "gamepad.jpg", price: 30 },
  Monitor: { filename: "monitor.jpg", price: 200 },
  Case: { filename: "case.jpg", price: 89 },
  Speaker: { filename: "speaker.jpg", price: 40 },
};

function App() {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState([]);

  function getItemIndex(name) {
    for (let i = 0; i < itemAmount.length; i++) {
      if (itemAmount[i].name === name) {
        return i;
      }
    }
  }

  // Return how much the total price of the item is
  function getItemTotal(name) {
    const itemQuantity = itemAmount[getItemIndex(name)].amount;
    return items[name].price * itemQuantity;
  }

  function updateItemAmount(name) {
    const index = getItemIndex(name);
    if (index === undefined) return;
    const newItemAmount = itemAmount.concat();
    newItemAmount[index].amount++;
    setItemAmount(newItemAmount);
  }

  function updateCart(e) {
    const newItem = e.currentTarget.getAttribute("data-name");
    if (!cart.includes(newItem)) {
      setCart(cart.concat(newItem));
      setItemAmount(itemAmount.concat({ name: newItem, amount: 1 }));
    } else {
      // If the item is already in the cart adds 1 to its quantity
      updateItemAmount(newItem);
    }
  }

  return (
    <BrowserRouter>
      <Navbar cartItems={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="shop"
          element={<Shop updateCart={updateCart} items={items} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
