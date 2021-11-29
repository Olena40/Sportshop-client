import * as Icon from "react-bootstrap-icons";

export default function CartIcon(props) {
  return (
    <div className="cart-icon" onClick={props.toggleShow}>
      {/*  <i className="material-icons">shopping_cart</i> */}
      <button>
        <Icon.Cart4
          style={{ backgroundcolor: "#55acee" }}
          color="rgb(43, 137, 226)"
          size={26}
          /* length={cartItems.length}
          toggleShow={toggleShow} */
        />
      </button>
      {props.length ? <span>{props.length}</span> : null}
    </div>
  );
}
