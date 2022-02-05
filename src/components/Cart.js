import CartItem from "./CartItem";

function Cart(props) {
  const { cartItems, cartClass, cartUpdater } = props;

  function getGrandTotalAndTotalItems() {
    const totalInfo = { grandTotal: 0, totalItems: 0 };
    cartItems.forEach((item) => {
      totalInfo.grandTotal += item.totalPrice;
      totalInfo.totalItems += item.quantity;
    });
    return totalInfo;
  }

  const { grandTotal, totalItems } = getGrandTotalAndTotalItems();

  return (
    <div className={cartClass}>
      <div className="cart-content">
        {cartItems.map((item, index) => {
          return <CartItem item={item} updateCart={cartUpdater} key={index} />;
        })}
      </div>
      <div className="checkout-div">
        <div className="total">Grand Total: {grandTotal}$</div>
        <div className="total-items">Total Items: {totalItems}</div>
        <div className="checkout" onClick={() => alert("Buy MORE")}>
          Checkout
        </div>
      </div>
    </div>
  );
}

export default Cart;
