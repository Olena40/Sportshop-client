import CartItem from "./CartItem";
import * as Icon from "react-bootstrap-icons";

export default function CartList(props) {
  // total of goods in the cart
  const cost = props.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="cart-modal">
      <i className="material-icons cart-modal-close" onClick={props.toggleShow}>
        <Icon.X size={30} />
      </i>
      <h5 className="red-text text-lighten-1">Your cart</h5>
      {props.items.length ? (
        <table className="striped">
          <thead>
            <tr>
              <th>Nomination of goods</th>
              <th>Number</th>
              <th>Price</th>
              <th>Sum</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                removeFromCart={props.removeFromCart}
              />
            ))}
            <tr>
              <th colSpan="3">Total</th>
              <th>{cost}</th>
              <th>€</th>
            </tr>
          </tbody>
        </table>
      ) : (
        <p style={{ justifycontent: "center" }}>Your cart is empty!</p>
      )}
    </div>
  );
}
