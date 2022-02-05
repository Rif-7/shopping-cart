function CartItem(props) {
  const { item, updateCart } = props;

  return (
    <div className="shop-item">
      <img
        alt="item"
        className="item-img"
        src={`./imgs/${item.filename}`}
      ></img>
      <div className="item-price">Price: {item.price}$</div>
      <div className="total-info">
        <div className="item-quantity">Quantity: {item.quantity}</div>
        <div className="item-total-price">Total: {item.totalPrice}$</div>
      </div>
      <div className="img-info">
        <div className="item-name">{item.name}</div>
        <div className="buttons">
          <button
            className="add-to-cart"
            onClick={() => updateCart(item.name)}
            data-name={item.name}
          >
            +
          </button>
          <button
            className="add-to-cart"
            onClick={() => updateCart(item.name, false)}
            data-name={item.name}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
