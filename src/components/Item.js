function Item(props) {
  const { item, updateCart } = props;
  return (
    <div className="shop-item">
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
          onClick={updateCart}
          data-name={item.name}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Item;
