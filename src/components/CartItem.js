import * as Icon from "react-bootstrap-icons";

export default function CartItem(props) {
  return (
    <tr className="tabl">
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>{props.price}€</td>
      <td>{props.price * props.quantity}€</td>
      <td>
        <i
          className="material-icons cart-item-delete"
          onClick={() => props.removeFromCart(props.id)}
        >
          <Icon.X size={30} />
        </i>
      </td>
    </tr>
  );
}
