import CartItem from "./CartItem";

export default function CartList(props) {
  // total of goods in the cart
  const cost = props.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="cart-modal">
      <i className="material-icons cart-modal-close" onClick={props.toggleShow}>
        close
      </i>
      <h5 className="red-text text-lighten-1">Your cart</h5>
      {props.items.length ? (
        <table className="striped">
          <thead>
            <tr>
              <th>nomination of goods</th>
              <th>number</th>
              <th>price</th>
              <th>sum</th>
              <th>delete</th>
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
              <th colSpan="3">total</th>
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
