import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
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
  const [cartClass, setCartClass] = useState("cart");

  function updateCartClass() {
    if (cartClass.includes("cart-show")) {
      setCartClass("cart");
    } else {
      setCartClass("cart cart-show");
    }
  }

  function getItemIndex(name) {
    for (let i = 0; i < itemAmount.length; i++) {
      if (itemAmount[i].name === name) {
        return i;
      }
    }
  }

  // Return how much the total price of the item is
  function getItemTotalAndQuatity(name) {
    const itemQuantity = itemAmount[getItemIndex(name)].amount;
    const itemTotal = items[name].price * itemQuantity;
    return { quantity: itemQuantity, totalPrice: itemTotal };
  }

  function updateItemAmount(name, increase = true) {
    const index = getItemIndex(name);
    if (index === undefined) return;
    const newItemAmount = itemAmount.concat();
    if (increase) {
      newItemAmount[index].amount++;
    } else {
      newItemAmount[index].amount--;
    }

    // If the item amount is less than 0 remove it from the cart
    if (newItemAmount[index].amount <= 0) {
      removeFromCart(name);
      newItemAmount.splice(index, 1);
    }

    setItemAmount(newItemAmount);
  }

  function removeFromCart(name) {
    const index = cart.indexOf(name);
    if (index === -1) return;
    const newCart = cart.concat();
    newCart.splice(index, 1);
    setCart(newCart);
  }

  function getCartItems() {
    const cartItems = [];
    cart.forEach((name) => {
      // return an object with in the form of { name, filename, price, totalPrice, quantity }
      const itemObj = Object.assign(
        { name },
        items[name],
        getItemTotalAndQuatity(name)
      );
      cartItems.push(itemObj);
    });
    return cartItems;
  }

  function addToCart(e) {
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
      <Navbar cartItems={cart.length} toggleCart={updateCartClass} />
      <Cart
        cartClass={cartClass}
        cartItems={getCartItems()}
        cartUpdater={updateItemAmount}
      />
      <Routes>
        <Route path="shopping-cart" element={<Home />} />
        <Route
          path="shopping-cart/shop"
          element={<Shop updateCart={addToCart} items={items} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
