import Item from "./Item";

const Shop = (props) => (
  <div className="shop-items">
    {props.items.map((item, index) => (
      <Item item={item} updateCart={props.updateCart} key={index} />
    ))}
  </div>
);

export default Shop;
