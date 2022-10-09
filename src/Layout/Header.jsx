import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const carts = useSelector((state) => state.cartReducer);
  return (
    <Navbar bg="light" expand="lg">
      <div style={{ display: "flex", gap: 15 }}>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/addItem">Add Item</NavLink>
        <NavLink to="/checkout">Cart {carts.cartProducts.length}</NavLink>
      </div>
    </Navbar>
  );
}

export default Header;
