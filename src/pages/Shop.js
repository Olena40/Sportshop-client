import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import { Context } from "../index";
import SportgoodList from "../components/SportgoodList";
import { observer } from "mobx-react-lite";
import { fetchBrands, fetchSportgoods, fetchTypes } from "../http/sportgoodAPI";
import Pages from "../components/Pages";
import ladoga from "../ladoga.jpg";
import sand from "../sand.jpeg";

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
      sportgood.page
    ).then((data) => {
      sportgood.setSportgoods(data.rows);
      sportgood.setTotalCount(data.count);
    });
  }, [sportgood.page, sportgood.selectedType, sportgood.selectedBrand]);

  const [cartItems, setCartItems] = useState([]);
  const [cartShow, setCartShow] = useState(false); // модальное окно
  // для показа сообщения после добавления в корзину
  const [showAlert, setShowAlert] = useState(null);

  const appendToCart = (item, quantity = 1) => {
    // нужно проверить, нет ли уже такого товара в корзине
    const itemIndex = cartItems.findIndex((value) => value.id === item.id);
    if (itemIndex < 0) {
      // такого товара еще нет
      const newItem = {
        ...item,
        quantity: quantity,
      };
      setCartItems([...cartItems, newItem]);
    } else {
      // такой товар уже есть
      const newItem = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity + quantity,
      };
      const newCart = cartItems.slice(); // копия массива cartItems
      newCart.splice(itemIndex, 1, newItem);
      setCartItems(newCart);
    }
    setShowAlert(item.name + " добавлен в корзину");
  };
  const removeFromCart = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  };

  const toggleShow = () => setCartShow(!cartShow);

  const hideAlert = () => setShowAlert(null);

  return (
    <Container className="shop">
      <div id="ladoga" class="container">
        <img
          className="ladoga"
          src={ladoga}
          alt="It's Seen."
          title="Ladoga!"
        ></img>
        <div class="centered">
          Relax in nature with comfort and pleasure &#127759;
        </div>
      </div>

      {/* <div
        id="sand"
        style={{
          position: "absolute",
          top: 400,
          left: 10,
          right: 10,
          bottom: 50,
          justifyContent: "center",
          alignItems: "center",
          width: 50,
        }}
      >
        <img className="sand" src={sand} alt="It's sand." title="Sand!"></img>
      </div> */}

      <div className="mt-2 d-flex">
        <Col md={3}>
          <TypeBar />
        </Col>

        <Col md={9}>
          <div className="mt-2 d-flex">
            <BrandBar />
            <CartIcon length={cartItems.length} toggleShow={toggleShow} />
          </div>
          {showAlert && <ShowAlert text={showAlert} hideAlert={hideAlert} />}
          <SportgoodList appendToCart={appendToCart} />
          {cartShow ? (
            <CartList
              items={cartItems}
              toggleShow={toggleShow}
              removeFromCart={removeFromCart}
            />
          ) : null}
          <Pages />
        </Col>
      </div>
    </Container>
  );
});

export default Shop;
