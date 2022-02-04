function Item(props) {
  const { item, updateCart } = props;
  return (
    <div className="shop-item">
      <img alt="item" className="item-img" src={item.imgUrl}></img>
      <div className="img-info">
        <div className="item-name">{item.name}</div>
        <button className="add-to-cart" onClick={updateCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Item;
