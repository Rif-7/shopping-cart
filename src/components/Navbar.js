import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="header">Rif'Store</div>
      <div className="nav-links">
        <ul>
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="shop" className="nav-link">
            <li>Shop</li>
          </Link>
        </ul>
      </div>
      <div className="cart-info" onClick={props.toggleCart}>
        Cart - {props.cartItems}{" "}
      </div>
    </div>
  );
}

export default Navbar;
