import React from "react";
import { Col, Card } from "react-bootstrap";
import starty from "../starty.jpeg";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { SPORTGOODS_ROUTE } from "../utils/consts";

const SportgoodItem = (props) => {
  const navigate = useNavigate();
  // navigate("/home");navigate(to, { state }).
  const { id, name, price, img, appendToCart, sportgood } = props;
  const item = {
    id: sportgood.id,
    name: sportgood.name,
    price: sportgood.price,
  };

  return (
    <div>
      <Col
        onClick={() => navigate(SPORTGOODS_ROUTE + "/" + sportgood.id)}
        className={
          "mt-4 px-3 d-flex-column justify-content-around align-items-end"
        }
      >
        <Card style={{ widht: 150, cursor: "pointer" }} border={"light"}>
          <div className="scale">
            <Image
              className="flex-wrap scale "
              widht={70}
              height={150}
              src={process.env.REACT_APP_API_URL + sportgood.img}
            />
          </div>
          <div className="text-green-50 mt-1 "></div>
          <div style={{ fontSize: 12 }}>{sportgood.name}</div>
          <div
            style={({ border: "1px solid lightgray" }, { color: "blueviolet" })}
          >
            {sportgood.price}€
          </div>
        </Card>
      </Col>

      <Col
        className={" px-3 d-flex-column justify-content-around align-items-end"}
      >
        <Card style={{ widht: 150, cursor: "pointer" }} border={"light"}>
          <div class="d-flex justify-content-between ">
            <button
              className=" align-self-center btn-outline-success"
              variant="success"
              style={{
                width: 120,
                height: 25,
                fontSize: 14,
                top: 10,
              }}
              onClick={() => appendToCart(item, 1)}
            >
              Add to Cart
            </button>
            <div class="d-flex ">
              <div>
                <Image widht={20} height={20} src={starty} />{" "}
              </div>
              <div>{sportgood.rating}</div>
            </div>
          </div>
        </Card>
      </Col>
    </div>
    // </Col>
  );
};

export default SportgoodItem;
