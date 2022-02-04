import Item from "./Item";

const fakeItems = [{}, {}, {}, {}, {}];

const Shop = (props) => (
  <div className="shop-items">
    {fakeItems.map((item) => (
      <Item item={item} updateCart={props.updateCart} />
    ))}
  </div>
);

export default Shop;
