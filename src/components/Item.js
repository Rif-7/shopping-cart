import { useState, useEffect } from "react";

function Item(props) {
  const { item, updateCart } = props;

  const [addedClass, setAddedClass] = useState("item-added");

  function addToCartHandler(e) {
    updateCart(e);
    setAddedClass("item-added item-added-show");
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddedClass("item-added");
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [item]);

  return (
    <div className="shop-item">
      <div className={addedClass}>Item Added</div>
      <img
        alt="item"
        className="item-img"
        src={`./imgs/${item.filename}`}
      ></img>
      <div className="item-price">Price: {item.price}$</div>
      <div className="img-info">
        <div className="item-name">{item.name}</div>
        <button
          className="add-to-cart"
          onClick={addToCartHandler}
          data-name={item.name}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Item;
