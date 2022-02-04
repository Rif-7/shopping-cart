import Item from "./Item";

function Shop(props) {
  const { items } = props;
  const names = Object.keys(items);
  return (
    <div className="shop-items">
      {names.map((name, index) => {
        // creating a new object with keys: name, filename and price
        const item = Object.assign({ name }, items[name]);
        return <Item item={item} updateCart={props.updateCart} key={index} />;
      })}
    </div>
  );
}

export default Shop;
