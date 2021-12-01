import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import { Context } from "../index";
import SportgoodList from "../components/SportgoodList";
import { observer } from "mobx-react-lite";
import { fetchBrands, fetchSportgoods, fetchTypes } from "../http/sportgoodAPI";
import Pages from "../components/Pages";
import ladoga from "../ladoga.jpg";
import { useState } from "react";
import ShowAlert from "../components/ShowAlert";
import CartList from "../components/CartList";
import CartIcon from "../components/CartIcon";

const Shop = observer(() => {
  const { sportgood } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => sportgood.setTypes(data));
    fetchBrands().then((data) => sportgood.setBrands(data));
    fetchSportgoods((null, null, 1, 2)).then((data) => {
      sportgood.setSportgoods(data.rows);
      sportgood.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchSportgoods(
      sportgood.selectedType.id,
      sportgood.selectedBrand.id,
      sportgood.page,
      3
    ).then((data) => {
      sportgood.setSportgoods(data.rows);
      sportgood.setTotalCount(data.count);
    });
  }, [sportgood.page, sportgood.selectedType, sportgood.selectedBrand]);

  const [cartItems, setCartItems] = useState([]);
  const [cartShow, setCartShow] = useState(false); // modal window
  // to show message after adding to cart
  const [showAlert, setShowAlert] = useState(null);

  const appendToCart = (item, quantity = 1) => {
    // you need to check if there is already such an item in the basket
    const itemIndex = cartItems.findIndex((value) => value.id === item.id);
    if (itemIndex < 0) {
      // there is no such product yet
      const newItem = {
        ...item,
        quantity: quantity,
      };
      setCartItems([...cartItems, newItem]);
    } else {
      // this product already exists
      const newItem = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity + quantity,
      };

      const newCart = cartItems.slice(); // copy of the array cartItems
      newCart.splice(itemIndex, 1, newItem);
      setCartItems(newCart);
    }
    setShowAlert(item.name + " =>" + " added to cart");
  };
  function removeFromCart(id) {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  }

  const toggleShow = () => setCartShow(!cartShow);

  const hideAlert = () => setShowAlert(null);

  return (
    <Container className="container-fluid">
      <img
        className="ladoga"
        src={ladoga}
        alt="It's Seen."
        title="Ladoga!"
      ></img>
      <div class="centered">
        Relax in nature with comfort and pleasure &#127759;
      </div>
      <div id="shop">
        <Row>
          <Col md={3}>
            <TypeBar />
          </Col>
          <Col md={9}>
            <BrandBar />

            <div>
              <div>
                <CartIcon length={cartItems.length} toggleShow={toggleShow} />
              </div>
              {showAlert && (
                <ShowAlert text={showAlert} hideAlert={hideAlert} />
              )}

              <SportgoodList appendToCart={appendToCart} />

              {cartShow ? (
                <CartList
                  items={cartItems}
                  toggleShow={toggleShow}
                  removeFromCart={removeFromCart}
                />
              ) : null}
            </div>

            <Pages />
          </Col>
        </Row>
      </div>
    </Container>
  );
});

export default Shop;
